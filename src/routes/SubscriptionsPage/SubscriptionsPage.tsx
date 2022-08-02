import * as React from "react";
import useBem from "../../hooks/useBem";
import { useSelector } from "../../hooks/useSelector";
import { useDispatch } from "react-redux";

import "./SubscriptionsPage.scss";
import ContentContainer from "../../shared/layout/ContentContainer";
import SectionContainer from "../../shared/layout/SectionContainer";
import Button from "../../shared/Button";
import { useEffect, useState } from "react";
import SubscriptionRoom from "../../shared/SubscriptionRoom/SubscriptionRoom";
import RoomService from "../../services/room.service";

export default function SubscriptionsPage() {
  const [subscriptionType, setSubscriptionType] = useState(1);
  const { bemBlock, bemElement } = useBem("SubscriptionsPage");
  const isAuthorizedUser = useSelector((state) => state.auth.isLoggedIn);
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

  function joinRoom(_id: string, name: string) {
    if (confirm(`Are you sure joining ${name} room?`)) {
      // Save it!
      RoomService.joinRoom(_id)
        .then((res: any) => {
          //make alert to confirm room join
          alert(res.data);
          console.log(res.data);
          fetchRooms();
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
    }
  }

  return (
    <SectionContainer className={bemBlock()}>
      <ContentContainer className={bemElement("content-container")}>
        <h1>ACTIVE ROOMS🚪:</h1>
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
        </div>
        <div className={bemElement("filters-buttons-container")}>
          <Button label={"Running"} outline customHeight height={"50px"} />
          <Button label={"Finished"} outline customHeight height={"50px"} />
        </div>
        <div className={bemElement("rooms-container")}>
          {rooms.map((room: any) => {
            return (
              <SubscriptionRoom
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
      </ContentContainer>
    </SectionContainer>
  );
}
