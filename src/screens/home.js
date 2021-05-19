import React, { Component } from "react";
import { Button } from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <Button onClick= {() => this.props.history.push("/picker")}>Click to go to Picker</Button>
      </div>
    );
  }
}