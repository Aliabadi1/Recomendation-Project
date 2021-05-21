import React, { Component } from "react";
import { Button } from 'react-bootstrap';


export default class Home extends Component {
  render() {
    return (
      <div className="Home" style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#b3ecff",
        flexDirection: 'column'
      }}>
        <h1 style={{borderBottom: 'solid'}}>Name TBA</h1>
        <br></br><br></br><br></br><br></br><br></br>
        <div>
          <h1>Trending Reccomendations</h1>
        </div>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Button onClick= {() => this.props.history.push("/picker")}>Click to go to Picker</Button>
      </div>
    );
  }
}