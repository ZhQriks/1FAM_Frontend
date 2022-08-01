import jwt_decode from "jwt-decode";
import { useSelector } from "../hooks/useSelector";
//export function
export function userDecoded(token: string) {
  return jwt_decode(token);
}
