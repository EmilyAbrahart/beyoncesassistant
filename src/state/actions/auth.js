import * as types from '../types';
import { Axios } from '../../utils/axios';


export const register = (credentials, history) => dispatch => {
	dispatch({ type: types.REQUEST_START });
	Axios()
		.post(`${process.env.REACT_APP_API_BASE_URL}api/registration/`, credentials)
		.then(res => {
			localStorage.setItem('token', res.data.key);
			dispatch({ type: types.REGISTER_SUCCESS, payload: res.data });
			history.push('/');
		})
		.catch((error) => {			
			dispatch({ type: types.REGISTER_FAILURE, payload: error.response.data});
		});
};


export const login = (credentials, history) => dispatch => {
	dispatch({ type: types.REQUEST_START });
	Axios()
		.post(`${process.env.REACT_APP_API_BASE_URL}api/login/`, credentials)
		.then(res => {
			localStorage.setItem('token', res.data.key);
			dispatch({ type: types.LOGIN_SUCCESS, payload: res.data });
			history.push('/');
		})
		.catch(error => {
			dispatch({ type: types.LOGIN_FAILURE, payload: error.response });
		});
};

export const logout = () => {
	localStorage.clear();
	window.location.reload();
	return { type: types.LOGOUT };
};
