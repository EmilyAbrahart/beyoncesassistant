import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../components/nav';
import { backgroundPrimary, tablet } from '../styles';
import store from '../state/store';
import { getRooms } from '../state/actions/game';

const Layout = ({
	component: Component,
	auth: { isLoggedIn },
	getRooms,
	...rest
}) => {
	const checkAuth = () => {
		const token = localStorage.getItem('token');

		if (token) {
			getRooms();
			store.dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });
		}
	};

	useEffect(() => {
		checkAuth();
	}, [isLoggedIn]);

	return (
		<Route
			{...rest}
			render={(props) => {
				return (
					<LayoutContainer>
						<NavBar />
						<ComponentContainer>
							<Component {...props} />
						</ComponentContainer>
					</LayoutContainer>
				);
			}}
		/>
	);
};

export default connect((state) => state, { getRooms })(Layout);

const LayoutContainer = styled.div`
	height: 100vh;
	width: 100%;
	background-color: ${backgroundPrimary};
	display: flex;
	justify-content: center;
	align-items: center;
	@media ${tablet} {
		overflow-y: hidden;
		max-width: 100vw;
	}
`;

const ComponentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding-top: 2rem;
	@media ${tablet} {
		padding-bottom: 3rem;
		overflow-y: hidden;
		max-height: 80%;
	}
`;
