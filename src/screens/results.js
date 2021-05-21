import React, { Component } from "react";
import { Button } from 'react-bootstrap';


export default class Results extends Component {
  render() {
    return (
      <div className="Home" style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#b3ecff",
        flexDirection: 'column'
      }}>
        <h1>Results Page</h1>
      </div>
    );
  }
}