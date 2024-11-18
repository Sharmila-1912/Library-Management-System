import axios from "axios";
import { REGISTER_ADMIN_SUCCESS, REGISTER_ADMIN_FAIL } from "./types";

export const registerAdmin = (adminData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/admin/register", adminData);
    dispatch({
      type: REGISTER_ADMIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: REGISTER_ADMIN_FAIL,
      payload: err.response.data,
    });
  }
};
