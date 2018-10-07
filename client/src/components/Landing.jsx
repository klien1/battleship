import React, { Component } from "react";
import landingImage from "../images/battleship_landing_page.jpg";

class Landing extends Component {
  render() {
    return (
      <div>
        {/* <h1>Landing</h1> */}
        <img src={landingImage} alt="battleship" />
      </div>
    );
  }
}

export default Landing;
