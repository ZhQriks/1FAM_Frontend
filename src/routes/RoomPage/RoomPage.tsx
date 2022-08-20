import * as React from "react";
import useBem from "../../hooks/useBem";
import { useSelector } from "../../hooks/useSelector";
import Modal from "react-modal";

import "./RoomPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import Button from "../../shared/Button";
import { useCallback, useEffect, useState } from "react";
import RoomService from "../../services/room.service";
import UserService from "../../services/user.service";
import Input from "../../shared/Input";
import { useNavigate } from "react-router-dom";

export default function RoomPage() {
  const [street, setStreet] = useState("");
  const [link, setLink] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const [subscriptionType, setSubscriptionType] = useState(1);
  const { bemBlock, bemElement } = useBem("RoomPage");
  let user: any;
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);
  if (isAuthorizedUser) {
    UserService.getUser().then((res) => {
      user = res.data;
    });
  }
  function fetchUserRooms() {
    if (isAuthorizedUser) {
      RoomService.getRooms()
        .then((res: any) => {
          let roomsData: any[] = [];
          for (let i = 0; i < res.data.length; i++) {
            for (let j = 0; j < res.data[i].users.length; j++) {
              if (res.data[i].users[j]._id === user._id) {
                roomsData.push(res.data[i]);
              }
            }
          }
          // @ts-ignore
          setRooms(roomsData);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetchUserRooms();
  });

  function getLink(roomId: string) {
    RoomService.getLinkRoom(roomId)
      .then((res: any) => {
        console.log(res.data);
        setLink(res.data.familyLink);
        setStreet(res.data.street);
      })
      .catch((err: any) => {
        console.log(err);
      });
    openModal();
  }

  function joinFamily() {
    window.location.href = link;
  }

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <h1>ACTIVE ROOM🚪:</h1>
        <div className={bemElement("rooms-container")}>
          {rooms.map((room: any) => {
            return (
              <div className={bemElement("room")}>
                <h2 className={bemElement("users-room-title")}>IN ROOM</h2>
                <div className={bemElement("users-container")}>
                  {room.users.map((user: any) => {
                    return (
                      <div className={bemElement("user")}>
                        <h3 style={{ textAlign: "center" }}>{user.name}</h3>
                        <img src="/images/pfp.png" alt="user avatar" />
                      </div>
                    );
                  })}
                </div>
                <div className={bemElement("room-main-info")}>
                  <div className={bemElement("room-rectangle")}></div>
                  <div className={bemElement("room-info")}>
                    <div className={bemElement("room-info-block")}>
                      Name:<h2>{room.name}</h2>
                    </div>
                    <div className={bemElement("room-info-block")}>
                      Price:<h2>{room.price}</h2>
                    </div>
                    <div className={bemElement("room-info-block")}>
                      Max Users:<h2>{room.maxUsers}</h2>
                    </div>
                  </div>
                </div>
                <div className={bemElement("room-description")}>
                  <h2>Description:</h2>
                  <p>{room.description}</p>
                </div>
                {room.maxUsers === room.users.length ? (
                  <div className={bemElement("room-actions")}>
                    <Button
                      label={"Start"}
                      onClick={() => getLink(room._id)}
                    ></Button>
                  </div>
                ) : (
                  <div className={bemElement("room-actions")}>
                    <h2>Waiting for more users</h2>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={bemElement("modal")}
        >
          <div>
            <Button
              label={"JOIN THE FAMILY"}
              onClick={() => {
                joinFamily();
              }}
            ></Button>
            <span>
              STREET: <strong>{street}</strong>
            </span>
          </div>
        </Modal>
      </ContentContainer>
    </SectionContainer>
  );
}
