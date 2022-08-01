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
  ) {
    return axios.post(APP_BACKEND_URL + "api/register", {
      username,
      password,
      firstName,
      birthday,
      image,
      skinTypeId,
      locationId,
      email,
      phoneNumber,
      isCosmeticBagAvailable,
    });
  }
}
export default new AuthService();
