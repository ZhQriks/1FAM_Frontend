import axios from "axios";
import authHeader from "./auth-header";
import { APP_BACKEND_URL } from "../constants/constants";

class UserService {
  getTest() {
    return axios.get(APP_BACKEND_URL + "/test");
  }
  getUser() {}

  getCurrentUser(id: number) {
    // @ts-ignore
    return axios.get(APP_BACKEND_URL + `api/user/${id}`);
  }

  getModeratorBoard() {
    // @ts-ignore
    return axios.get(APP_BACKEND_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    // @ts-ignore
    return axios.get(APP_BACKEND_URL + "admin", { headers: authHeader() });
  }
}

export default new UserService();
