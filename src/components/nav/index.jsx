/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import bee from '../../styles/bee.png';
import { logout } from '../../state/actions/auth';
import { tablet, mobile } from '../../styles';

const NavBar = ({ history }) => {
	return (
		<NavContainer>
			<div onClick={() => history.push('/')}>
				<Logo src={bee} />
			</div>
			<div />
		</NavContainer>
	);
};

export default withRouter(connect((state) => state, { logout })(NavBar));

const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	padding: 2rem 2rem 1rem 2rem;
	position: absolute;
	top: 0;
	left: 0;

	@media ${tablet} {
		padding: 1rem;
		height: auto;
		z-index: 500;
	}

	@media ${mobile} {
		padding: 0.5rem;
	}
`;

const Logo = styled.img`
	height: 53px;
	width: 53px;
	&:hover {
		cursor: pointer;
	}
	@media ${mobile} {
		height: 40px;
		width: 40px;
	}
`;
