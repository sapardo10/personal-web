import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import Banner from "./components/Banner/Banner.js";
import { fire } from "./fire.js";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);

    if (fire.apps !== undefined && !fire.apps.length) {
      fire.initializeApp(fire);
    }
    this.state = {
      banner: "jajaja",
      count: 0
    };
    
  }

  componentDidMount() {
    var that = this;
    fire.database().ref('banner').once('value').then(function (b){
      that.setState({banner:b.val(),
      count:that.state.count+1});
      console.log('callback',that.state.banner);
    });
    console.log('componentDidMount',this.state);
  }

  render() {
    console.log('render',this.state);
    return (
      <div>
        <Header />
        <Banner title={this.state.banner} />
      </div>
    );
  }
}

export default App;
