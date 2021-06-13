import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

class Contact extends Component {
  

  render() {

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">

            <div className="ten columns">
              <h1 className="lead">Subscribe to our Newsletter</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter your email address"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <button className="submit" >Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
