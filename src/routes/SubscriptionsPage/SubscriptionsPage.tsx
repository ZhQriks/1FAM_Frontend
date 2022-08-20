import * as React from "react";
import useBem from "../../hooks/useBem";
import { useSelector } from "../../hooks/useSelector";
import Modal from "react-modal";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import Button from "../../shared/Button";
import { useCallback, useEffect, useState } from "react";
import SubscriptionRoom from "../../shared/SubscriptionRoom/SubscriptionRoom";
import RoomService from "../../services/room.service";
import { useNavigate } from "react-router-dom";
import Input from "../../shared/Input";
import "./SubscriptionsPage.scss";

export default function SubscriptionsPage() {
  const [selectedOption, setSelectedOption] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);
  const { bemBlock, bemElement } = useBem("SubscriptionsPage");
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [roomType, setRoomType] = useState("netflix");
  if (isAuthorizedUser) {
    let user = useSelector((state) => state.auth.user);
  }
  function fetchRooms() {
    if (isAuthorizedUser) {
      RoomService.getRooms()
        .then((res: any) => {
          setRooms(res.data);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    fetchRooms();
  }, []);
  const navigate = useNavigate();
  function joinRoom(_id: string, name: string) {
    console.log(_id, name);
    if (confirm(`Are you sure joining ${name} room?`)) {
      // Save it!
      RoomService.joinRoom(_id)
        .then((res: any) => {
          alert(res.data);
          console.log(res.data);
          navigate("/room");
          fetchRooms();
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
    }
  }
  // [this.SPT]: 6000,
  //     [this.NTF]: 5500,
  //     [this.AM]: 4000,
  function formSubmit() {
    let maximumUsers = 6;
    let price = 6000;
    let logo = "www/https:/dsdscasc.png";
    switch (roomType) {
      case "netflix":
        price = 5500;
        maximumUsers = 6;
        break;
      case "appleMusic":
        price = 4000;
        maximumUsers = 4;
        break;
      case "spotify":
        price = 6000;
        maximumUsers = 4;
    }
    console.log(
      name,
      description,
      expirationDate,
      roomType,
      price,
      maximumUsers
    );

    RoomService.createRoom(
      name,
      price,
      maximumUsers,
      description,
      expirationDate,
      logo
    )
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      })
      .then(() => {
        fetchRooms();
        navigate("/room");
      });
  }

  function navigateToRoom() {
    navigate("/room");
  }

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <h1>ACTIVE ROOMS🚪:</h1>
        <h2
          className={bemElement("room-link")}
          onClick={() => navigateToRoom()}
        >
          Current room
        </h2>
        <div className={bemElement("subscriptions-container")}>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/netflix.jpg" alt="spotfiy-logo" />
            </div>
            <h2>NETFLIX</h2>
          </div>
          <div className={bemElement("subscription-type")}>
            <div className={bemElement("subscription-image-container")}>
              <img src="/logos/spotify.png" alt="spotfiy-logo" />
            </div>
            <h2>SPOTIFY</h2>
          </div>
        </div>
        <div className={bemElement("filters-buttons-container")}>
          <Button
            label={"Create Room"}
            outline
            customHeight
            height={"50px"}
            onClick={openModal}
          />
        </div>
        <div className={bemElement("rooms-container")}>
          {rooms.map((room: any) => {
            return (
              <SubscriptionRoom
                //if price is 5500 then type is netflix, if price is 6000 type is spotify
                type={
                  room.price === 5500
                    ? "netflix"
                    : room.price === 6000
                    ? "spotify"
                    : "appleMusic"
                }
                users={room.users.length}
                label={room.name}
                price={Math.round(room.price / room.maxUsers)}
                description={room.description}
                maxUsers={room.maxUsers}
                onClick={() => joinRoom(room._id, room.name)}
                className={bemElement("subscription-room")}
              />
            );
          })}
        </div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={bemElement("modal")}
        >
          <div className={bemElement("form-container")}>
            <h2 style={{ marginTop: "20px" }}>Create Room</h2>
            <form onSubmit={formSubmit}>
              <p>Room Name</p>
              <Input
                customWidth={true}
                width={"100%"}
                name={"Room name"}
                placeholder={"Beautiful room name"}
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              <p>Description</p>
              <Input
                customWidth={true}
                width={"100%"}
                name={"description"}
                placeholder={"description"}
                value={description}
                onChange={(e: any) => setDescription(e.target.value)}
              />
              <p>Expiration date </p>
              <Input
                customWidth={true}
                width={"100%"}
                name={"Expiration date"}
                placeholder={"Expiration date"}
                value={expirationDate}
                onChange={(e: any) => setExpirationDate(e.target.value)}
              />
              <p>Subscription Type</p>
              <select
                className={bemElement("select")}
                value={roomType}
                onChange={(e: any) => setRoomType(e.target.value)}
              >
                <option value={"netflix"}>Netflix</option>
                <option value={"spotify"}>Spotify</option>
                <option value={"appleMusic"}>Apple Music</option>
              </select>
              <br />
              <Button label={"Create"} customSize={true} size={"100%"} />
            </form>
          </div>
        </Modal>
      </ContentContainer>
    </SectionContainer>
  );
}
