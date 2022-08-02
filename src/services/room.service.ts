import axios from "axios";
import authHeader from "./auth-header";
import { APP_BACKEND_URL } from "../constants/constants";

class RoomService {
  getRooms() {
    return axios.get(APP_BACKEND_URL + "api/room");
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
}

export default new RoomService();
