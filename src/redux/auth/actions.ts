import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./actionTypes";
import AuthService from "../../services/auth.service";

export const setMessage = (message: any) => ({
  type: SET_MESSAGE,
  payload: message,
});
export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const register =
  (
    username: string,
    password: string,
    firstName: string,
    birthday: string,
    image: string,
    skinTypeId: number,
    locationId: number,
    email: string,
    phoneNumber: string,
    isCosmeticBagAvailable: boolean
  ) =>
  (dispatch: any) => {
    return AuthService.register(
      username,
      password,
      firstName,
      birthday,
      image,
      skinTypeId,
      locationId,
      email,
      phoneNumber,
      isCosmeticBagAvailable
    ).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
        return Promise.resolve();
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        dispatch({
          type: REGISTER_FAIL,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
        return Promise.reject();
      }
    );
  };
export const login = (email: string, password: string) => (dispatch: any) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });
      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString() ||
        "Login failed";
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};
export const logout = () => (dispatch: any) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};
