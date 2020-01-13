import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, omnis."
      },
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, omnis."
      },
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, omnis."
      },
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, omnis."
      }
    ]
  };

  render() {
    return (
      <div>
        <Title title="services" />
      </div>
    );
  }
}

Services.propTypes = {};

export default Services;
