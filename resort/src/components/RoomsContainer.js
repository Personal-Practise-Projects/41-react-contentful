import React from "react";
import PropTypes from "prop-types";

import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer(props) {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms, rooms } = value;
        return loading ? (
          <Loading />
        ) : (
          <div>
            RoomsContainer
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </div>
        );
      }}
    </RoomConsumer>
  );
}

RoomsContainer.propTypes = {};
