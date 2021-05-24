import React, { Component, useState } from "react";
import { Button, Form, Alert } from 'react-bootstrap';

function Textbox() {
    const [fname, setFname] = useState("");
    const [arr, setarr] = useState([]);

  
    const handleChange = e => {
      setFname(e.target.value)
    }
    const handleClick = e => {
        if(arr.length < 5){
            setarr(current => [...current, fname]);
        }
    }
  
    return (
      <div>
        <h1>Select Your Favourite Animes!</h1>
        <Form>
          <Form.Control type="text" value={fname} onChange={handleChange}/>
          <Button onClick={handleClick}>Click To Save Anime</Button>  
        </Form>
        <h5>{arr.map((goal) => <Alert variant='primary'>{goal}</Alert>)}</h5>
      </div>
    )
  }
  
  export default Textbox;