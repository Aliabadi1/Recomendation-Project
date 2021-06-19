import React, { Component } from "react";
import { Button } from 'react-bootstrap';

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import PageHeader from "../components/PageHeader/PageHeader.js";
import Footer from "../components/Footer/Footer.js";

export default class Home extends Component {
  render() {
    return (
      <>
        <IndexNavbar />
        <div
          className="Home"
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   backgroundColor: "#b3ecff",
          //   flexDirection: "column",
          // }}
        >
          <PageHeader />
          <h1 style={{ borderBottom: "solid" }}>Name TBA</h1>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <h1>Trending Reccomendations</h1>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Button onClick={() => this.props.history.push("/picker")}>
            Click to go to Picker
          </Button>
          <Footer />
        </div>
      </>
    );
  }
}