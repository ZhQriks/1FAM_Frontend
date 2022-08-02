import axios from "axios";
import authHeader from "./auth-header";
import { APP_BACKEND_URL } from "../constants/constants";

class UserService {
  getTest() {
    return axios.get(APP_BACKEND_URL + "/test");
  }
  getUser() {
    return axios.get(APP_BACKEND_URL + "api/user", {
      // @ts-ignore
      headers: authHeader(),
    });
  }
  resplenishUser(sum: number) {
    return axios.post(
      APP_BACKEND_URL + "qiwi/bill",
      {
        amount: sum,
      },
      {
        // @ts-ignore
        headers: authHeader(),
      }
    );
  }
  updateBalance() {
    return axios.get(APP_BACKEND_URL + "qiwi/bill/info", {
      // @ts-ignore
      headers: authHeader(),
    });
  }
}

export default new UserService();
