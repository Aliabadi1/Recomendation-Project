import React from "react";
import { Button, Form, Alert } from 'react-bootstrap';

class Textbox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fname: "",
      arr:[],
      shows:[],
      results:[],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchtasks = this.fetchtasks.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
    handleSubmit(e){
      for(let i=0;i < this.state.arr.length; i++){
        var curr;
        for(let x=0; x < this.state.shows.length;x++){
          if(this.state.arr[i] === this.state.shows[x].title.slice(1)){
            curr = this.state.shows[x].genres.slice(1, this.state.shows[x].genres.length - 1);
            curr = curr.split(',');
            for(let a = 0; a < curr.length;a++){
              if(curr[a][0] === "'"){
                curr[a] = curr[a].slice(1, curr[a].length - 1);
              }else{
                curr[a] = curr[a].slice(2, curr[a].length - 1);
              }
            }
            var temp = true;
            for(let y = 0; y < this.state.shows.length; y++){
              var recs = [];
              var show;
              // show = this.state.shows[y].genres.slice(1, this.state.shows[y].genres.length - 1);
              // show = show.split(',');
              // for(let a = 0; a < show.length;a++){
              //   if(show[a][0] === "'"){
              //     show[a] = show[a].slice(1, show[a].length - 1);
              //   }else{
              //     show[a] = show[a].slice(2, show[a].length - 1);
              //   }
              // }
              // for(let z = 0; z < curr.length; z++){
              //   if(!show.includes(curr[z])){
              //     console.log(show, curr)
              //     temp = false
              //     break;
              //   }
              // }
              if(this.state.shows[y].genres.indexOf(curr[0]) !== -1){
                recs.push(this.state.shows[y]);
              }
            }
            console.log(recs, curr[0]);
          }
          
        }
      }
    }
    handleChange(e){
      this.setState({fname:e.target.value});
    }
    handleClick(e){
        if(this.state.arr.length < 5){
          if(!this.state.arr.includes(this.state.fname)){
            var temp = false;
            for(let x = 0; x < this.state.shows.length; x++){
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