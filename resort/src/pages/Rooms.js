import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

Rooms.propTypes = {};

export default Rooms;
