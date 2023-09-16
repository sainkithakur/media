import axios from "axios";
import {
  BASEURL,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  PROFILE,
  PROFILE_SUCCESS,
  PROFILE_FAIL,
} from ".";
import toast from "react-hot-toast";

// REGISTER
export const AuthRegister = (formValues, cb) => async (dispatch) => {
  dispatch({ type: REGISTER });
  try {
    await axios.post(`${BASEURL}user`, formValues).then((res) => {
      if (res.status === 201) {
        toast.success(res.data.message);
        dispatch({ type: REGISTER_SUCCESS });
        cb();
      }
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: REGISTER_FAIL });
  }
};

// LOGIN
export const AuthLogin = (formValues, cb) => async (dispatch) => {
  dispatch({ type: LOGIN });
  try {
    await axios.post(`${BASEURL}auth/login`, formValues).then((res) => {
      if (res.status === 200) {
        toast.success(res.data.message);
        localStorage.setItem("access_token", res.data.access_token);
        dispatch({ type: LOGIN_SUCCESS });
        cb();
      }
    });
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch({ type: LOGIN_FAIL });
  }
};

// User Profile
export const UserProfile = () => async (dispatch) => {
  dispatch({ type: PROFILE });
  const id = 1;
  try {
    await axios.get(`${BASEURL}user/${id}`).then((res) => {
      if (res.status === 200) {
        console.log(res);
        dispatch({ type: PROFILE_SUCCESS, payload: res.data });
      }
    });
  } catch (error) {
    dispatch({ type: PROFILE_FAIL });
  }
};
