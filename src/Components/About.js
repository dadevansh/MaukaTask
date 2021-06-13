import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
              <img
                className="profile-pic"
                src={profilepic}
                alt="My profile picture"
              />
            <div style={{marginLeft: "-28%"}}><p>{name}</p></div>
            <div className="nine columns main-col">
              <p>Thank you for all the amazing produce and products you deliver each week… you make my life so easy an bring goodness into our family eating. I’ve been roasting a lot of brussel sprouts and</p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
