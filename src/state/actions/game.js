import * as types from '../types';
import { axiosWithAuth } from '../../utils/axios';
import store from '../store';
import { SPRITE_SIZE } from '../../utils/constants';

export const getRooms = () => async dispatch => {
	dispatch({ type: types.GET_ROOMS_START });

	try {
		const response = await axiosWithAuth().get(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/getrooms/`
		);
		localStorage.setItem('rooms', JSON.stringify(response.data.rooms))
		dispatch({
			type: types.GET_ROOMS_SUCCESS,
			payload: response.data.rooms.sort((a, b) => a.id - b.id)
		});
	} catch (err) {
		dispatch({
			type: types.GET_ROOMS_FAILURE,
			payload: err.message
		});
	}
};

export const initializePlayer = () => async dispatch => {
	dispatch({ type: types.INIT_PLAYER_START });
	try {
		const response = await axiosWithAuth().get(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/init/`
		);

		const room = await store
			.getState()
			.game.rooms.find(r => r.id === response.data.room_id);

		dispatch({
			type: types.INIT_PLAYER_SUCCESS,
			payload: {
				isFired: false,
				position: [room.j * SPRITE_SIZE, room.i * SPRITE_SIZE],
				currentRoom: room,
				...response.data
			}
		});
	} catch (err) {
		dispatch({
			type: types.INIT_PLAYER_FAILURE,
			payload: err.message
		});
	}
};

export const movePlayer = direction => async dispatch => {
	dispatch({ type: types.MOVE_PLAYER_START });

	try {
		const response = await axiosWithAuth().post(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/move/`,
			{ direction: `${direction}` }
		);

		const room = await store
			.getState()
			.game.rooms.find(r => r.id === response.data.room_id);

		dispatch({
			type: types.MOVE_PLAYER_SUCCESS,
			payload: {
				currentRoom: room,
				position: [room.j * SPRITE_SIZE, room.i * SPRITE_SIZE],
				...response.data
			}
		});
	} catch (err) {
		dispatch({
			type: types.MOVE_PLAYER_FAILURE,
			payload: err.message
		});
	}
};

export const completeChallenge = () => async dispatch => {
	dispatch({ type: types.COMPLETE_CHALLENGE_START });

	try {
		const response = await axiosWithAuth().get(
			`${process.env.REACT_APP_API_BASE_URL}api/adv/completechallenge/`
		);

		localStorage.setItem('score', JSON.stringify(response.data.score))

		dispatch({
			type: types.COMPLETE_CHALLENGE_SUCCESS,
			payload: response.data.score
		});
	} catch (err) {
		dispatch({
			type: types.COMPLETE_CHALLENGE_FAILURE,
			payload: err.message
		});
	}
};

export const failChallenge = () => dispatch => {

	localStorage.setItem('isFired', JSON.stringify(true))
	dispatch({
		type: types.FAIL_CHALLENGE
	});
};

export const completeGame = () => dispatch => {

	localStorage.setItem('isFinished', JSON.stringify(true))
	dispatch({
		type: types.COMPLETE_GAME
	});
};
