import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import PresentedBy from "./Components/PresentedBy"
import WelcomeToNature from "./Components/WelcomeToNature";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <WelcomeToNature data={this.state.resumeData.nature} />
        <PresentedBy data={this.state.resumeData.presented} />
        <Contact data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Blogs data={this.state.resumeData.portfolio} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
