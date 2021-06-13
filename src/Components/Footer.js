import React, { Component } from "react";
import Fade from "react-reveal";
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
    const logo = "images/" + this.props.data.logo;

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
            <a href="#home" ><img
                className="logo"
                src={logo}  
                alt="logo"
                align="left"
              /><div style={{position: "absolute", left: "70px", top: "13px", fontSize: "32px", color: "white"}}>Organic</div></a><br/><br/>
              <p className="copyright">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
              <div className='footer-link-items'>
                <h2>Information</h2>
                <a href='#home'>About us</a><br/>
                <a href='#home'>Products</a><br/>
                <a href='#home'>Contact us</a><br/>
                <a href='#home'>Terms of Services</a><br/>
              </div>
              <div className="follow-us"><h2>Follow Us</h2></div>
              <div className="social-link">
              <ul className="social-links" >{networks}</ul>
              </div>
              <ul className="copyright">
                <li>&copy; Copyright 2020 Nature</li>
              </ul>
              
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
