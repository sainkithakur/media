import { USER_LIST_FAIL } from ".";

export const UserList = () => async (dispatch) => {
  dispatch({ type: UserList });
  try {
    await axios.get(`${BASEURL}user`).then((res) => {
      if (res.status === 200) {
        console.log(res);
        dispatch({ type: UserList_SUCCESS, payload: res.data });
      }
    });
  } catch (error) {
    dispatch({ type: USER_LIST_FAIL });
  }
};
