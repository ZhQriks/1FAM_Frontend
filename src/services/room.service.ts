import axios from "axios";
import authHeader from "./auth-header";
import { APP_BACKEND_URL } from "../constants/constants";

class RoomService {
  getRooms() {
    return axios.get(APP_BACKEND_URL + "api/room");
  }
  getLinkRoom(roomId: string) {
    return axios.post(
      APP_BACKEND_URL + "api/room/link",
      {
        roomId: roomId,
      },
      {
        // @ts-ignore
        headers: authHeader(),
      }
    );
  }
  joinRoom(roomId: string) {
    return axios.post(
      APP_BACKEND_URL + "api/room/join",
      {
        roomId: roomId,
      },
      {
        // @ts-ignore
        headers: authHeader(),
      }
    );
  }

  createRoom(
    name: string,
    price: number,
    maxUsers: number,
    description: string,
    expires: string,
    logo: string
  ) {
    return axios.post(
      APP_BACKEND_URL + "api/room",
      {
        name: name,
        price: price,
        maxUsers: maxUsers,
        description: description,
        expires: expires,
        logo: logo,
      },
      {
        // @ts-ignore
        headers: authHeader(),
      }
    );
  }
}

export default new RoomService();
