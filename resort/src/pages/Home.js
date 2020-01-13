import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
	    <Services />
    </React.Fragment>
  );
}

Home.propTypes = {};
