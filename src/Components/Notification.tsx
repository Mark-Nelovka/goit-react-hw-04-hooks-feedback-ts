import { notification } from "../Interfaces/interfaces";
export default function Notification({ message }: notification) {
  return <p>{message}</p>;
}