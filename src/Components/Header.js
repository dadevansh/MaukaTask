import React, { Component } from "react";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const logo = "images/" + this.props.data.logo;

    return (
      <header id="home">

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <div style={{position: "absolute"}}>
            <a href="#home" style={{fontSize:"28px", textAlign: "left", marginTop: "100px"}}><img
              className="logo"
              src={logo}  
              alt="logo"
              align="left"
            /><div style={{position: "absolute", left: "50px", top: "5px"}}>Organic</div></a>
            </div>
            
            
            <div style={{textAlign: "right", marginRight: "50px"}}>
            <li className="current" >
              <a className="smoothscroll" href="#home" >
                Home
              </a>
            </li>

            <li >
              <a className="smoothscroll" href="#" >
                Products
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#">
                Blogs
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#">
                About Us
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#">
                Contact
              </a>
            </li>
            </div>
            

            
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <text style={{marginLeft: "80px", fontSize: "28px"}}>Healthy life with</text><h1>Nature organic</h1><br></br>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Vegetables are the edible parts of the plant<br/>that is used in cooking or can be eaten now</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="#" className="button btn explore-btn">
                  Explore Now
                </a>
              </ul>
            </Fade>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;
