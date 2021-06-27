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
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit(e){
      
    }
    handleChange(e){
      this.setState({fname:e.target.value});
    }
    handleClick(e){
        if(this.state.arr.length < 5){
          if(!this.state.arr.includes(this.state.fname)){
            var temp = false;
            for(let x = 0; x < this.state.shows.length; x++){
              console.log(this.state.shows[x].title);
              console.log(this.state.fname);
              if(this.state.shows[x].title.slice(1) === this.state.fname){
                temp = true;
              }
            }
            if(temp){
              this.setState({arr: [...this.state.arr, this.state.fname]});
            }
            else{
              alert("This Anime Doesn't Exist(Check for spelling error)")
            }
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
          <span>
            <Button onClick ={() => this.setState({arr:[]})} variant="warning">Reset</Button>
          </span>
          <span>
            <Button onClick={this.handleSubmit}>Generate Reccomendations</Button>
          </span>
        </div>
      </div>
      )
    }
  }
  
  export default Textbox;