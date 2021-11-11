import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Cabecalho from "./Components/Cabecalho";
import Rodape from "./Components/Rodape";
import QueroAdotar from "./Components/QueroAdotar";
import Adocao from "./Components/Adocao"; 
import Contato from "./Components/Contact" 
import Quemsomos from "./Components/Quemsomos"

import {Container, Typography } from "@material-ui/core"
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
        <Cabecalho />
        <QueroAdotar />
        <Adocao />
        <Quemsomos />
        <Contato data={this.state.resumeData} />
        <Rodape data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
