import axios from "axios";
import { APP_BACKEND_URL } from "../constants/constants";
class AuthService {
  login(email: string, password: string) {
    return axios
      .post(APP_BACKEND_URL + "api/login", { email, password })
      .then((response) => {
        console.log(response.data);
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(
    name: string,
    surname: string,
    age: number,
    email: string,
    password: string
  ) {
    return axios.post(APP_BACKEND_URL + "api/register", {
      name,
      surname,
      age,
      email,
      password,
    });
  }
}
export default new AuthService();
