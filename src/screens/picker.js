import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap';
import Textbox from './../components/Textbox'


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
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Textbox></Textbox>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        <Button onClick= {() => this.props.history.push("/results")}>Click to go to Results</Button>
      </div>
    );
  }
}