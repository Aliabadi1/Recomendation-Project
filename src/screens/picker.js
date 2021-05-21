import React, { Component } from "react";
import { Button } from 'react-bootstrap';


export default class Picker extends Component {
  render() {
    return (
      <div className="Home" style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#b3ecff",
        flexDirection: 'column'
      }}>
        <h1>Picker Page</h1>
        <Button onClick= {() => this.props.history.push("/results")}>Click to go to Results</Button>
      </div>
    );
  }
}