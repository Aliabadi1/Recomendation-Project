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
          if(!arr.includes(fname)){
            setarr(current => [...current, fname]);
          }
        }
    }
  
    return (
      <div>
        <h1>Select Your Favourite Animes!</h1>
        <Form>
          <Form.Control type="text" value={fname} onChange={handleChange}/>
          <Button onClick={handleClick} variant="outline-primary">Click To Save Anime</Button>  
          
        </Form>
        <br></br><br></br><br></br>
        <h5>{arr.map((goal) => <Alert variant='info'>{goal}</Alert>)}</h5>
        <div>
          <Button onClick ={() => setarr([])} variant="warning">Reset</Button>
        </div>
      </div>
    )
  }
  
  export default Textbox;