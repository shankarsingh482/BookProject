import {USER_LOGGED_IN} from '../types';
import api from '../api';

export const userLoggedIn = (user) =>
({
    types:USER_LOGGED_IN,
    user
});

/**
 * This function is used for credential matching once login happen it will dispatch the action.
 *
 * @param {*} credentials
 */
export const login = (credentials) => (dispatch) =>
    api.user.login(credentials).then(user=>dispatch(userLoggedIn(user)));


