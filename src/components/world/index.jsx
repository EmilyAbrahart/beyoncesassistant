import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Player from '../player';
import Map from '../map';
import {
	MAP_WIDTH,
	MAP_HEIGHT,
	MAP_WIDTH_MOB,
	MAP_HEIGHT_MOB,
} from '../../utils/constants';
import { initializePlayer, completeGame } from '../../state/actions/game';
import Dialogue from '../dialogue';
import Fired from '../fired';
import Complete from '../complete';
import Movement from '../movement/index';
// import GameSound from '../../sound';
import { tablet, mobile } from '../../styles';

const World = ({
	game: {
		player: { score },
	},
	initializePlayer,
	completeGame,
	history,
}) => {
	useEffect(() => {
		const checkAuth = () => {
			const token = localStorage.getItem('token');
			if (!token) {
				history.push('/');
			}
		};
		checkAuth();
		initializePlayer();
	}, []);

	useEffect(() => {
		if (score === 10) {
			completeGame();
		}
	}, [score]);

	return (
		<div>
			<MainDiv>
				<DialogContainer>
					<Dialogue />
				</DialogContainer>
				<WorldDiv>
					<Complete />
					<Fired />
					<Map />
					{/* <GameSound /> */}
					<Player />
				</WorldDiv>
				<Movement />
			</MainDiv>
		</div>
	);
};

export default withRouter(
	connect((state) => state, { initializePlayer, completeGame })(World)
);

const WorldDiv = styled.div`
	position: relative;
	flex-wrap: wrap;
	margin: 15px;
	width: ${MAP_WIDTH}px;
	height: ${MAP_HEIGHT}px;
	box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.35);
	@media ${tablet} {
		margin-top: 0;
	}
	@media ${mobile} {
		width: ${MAP_WIDTH_MOB}px;
		height: ${MAP_HEIGHT_MOB}px;
	}
`;

const MainDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 1200px;
	max-width: 100vw;
	height: ${MAP_HEIGHT}px;
	position: relative;

	@media ${tablet} {
		height: auto;
		width: ${MAP_WIDTH}px;
		flex-direction: column;
	}
	@media ${mobile} {
		width: ${MAP_WIDTH_MOB}px;
	}
`;

const DialogContainer = styled.div`
	@media ${tablet} {
		position: absolute;
		top: 0;
		left: 0;
		height: ${MAP_HEIGHT}px;
		width: ${MAP_WIDTH}px;
		display: flex;
		justify-content: center;
		align-items: center;

	}
	@media ${mobile} {
		height: ${MAP_HEIGHT_MOB}px;
		width: ${MAP_HEIGHT_MOB}px;
		z-index: 5000;
	}
`;
