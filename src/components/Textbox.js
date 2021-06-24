import React from "react";
import { Button, Form, Alert } from 'react-bootstrap';

class Textbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fname: "",
      arr:[],
      shows:[],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchtasks = this.fetchtasks.bind(this);
  }
  
    handleChange(e){
      this.setState({fname:e.target.value});
    }
    handleClick(e){
        if(this.state.arr.length < 5){
          if(!this.state.arr.includes(this.state.fname)){
            this.setState({arr: [...this.state.arr, this.state.fname]});
          }
        }
    }
    componentWillMount(){
      this.fetchtasks();
    }
    fetchtasks(){
      console.log("testing testing")
      fetch('http://127.0.0.1:8000/shows/')
      .then(response => response.json())
      .then(data => this.setState({shows: data})
        )
      }
    
  
    render() {
      return(
      <div>
        <h1>Select Your Favourite Animes!</h1>
        <Form>
          <Form.Control type="text" value={this.state.fname} onChange={this.handleChange}/>
          <Button onClick={this.handleClick} variant="outline-primary">Click To Save Anime</Button>  
          
        </Form>
        <br></br><br></br><br></br>
        <h5>{this.state.arr.map((goal, index) => <Alert variant='info' key={index}>{goal}</Alert>)}</h5>
        <div>
          <Button onClick ={() => this.setState({arr:[]})} variant="warning">Reset</Button>
        </div>
      </div>
      )
    }
  }
  
  export default Textbox;