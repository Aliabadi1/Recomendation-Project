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
            var toadd = {};
            var rankings = [this.state.shows[x].rank];
            var showScores = {};
            var max = 0;
            curr = this.state.shows[x].genres.slice(1, this.state.shows[x].genres.length - 1);
            curr = curr.split(',');
            for(let y = 0; y < curr.length; y++){
              if(curr[y][0] === " "){
                curr[y] = curr[y].slice(2, curr[y].length - 1);
              }else{
                curr[y] = curr[y].slice(1, curr[y].length - 1);
              }
            }
            for(let y = 0; y < this.state.shows.length;y++){
              for(let z = 0; z < curr.length;z++){
                if(this.state.shows[y].genres.includes(curr[z])){
                  if(toadd[this.state.shows[y].title]){
                    toadd[this.state.shows[y].title] += 1
                    if(toadd[this.state.shows[y].title] > max){
                      max = toadd[this.state.shows[y].title];
                    }
                  }else if(!rankings.includes(this.state.shows[y].rank)){
                    rankings.push(this.state.shows[y].rank)
                    toadd[this.state.shows[y].title] = 1
                    showScores[this.state.shows[y].title] = this.state.shows[y].score;
                    if(toadd[this.state.shows[y].title] > max){
                      max = toadd[this.state.shows[y].title];
                    }
                  }
                }
              }
            }
            var recs = {};
            var toSort = [];
            for(var k in toadd){
              if(toadd[k] >= max - 2){
                recs[k] = showScores[k];
                toSort.push(showScores[k]);
              }
            }
            var toPrint = []
            toSort.sort().reverse();
            for(let b = 0; b < 5; b++){
              for(var k in recs){
                if(toSort[b] == recs[k]){
                  toPrint.push(k)
                  delete recs[k];
                }
              }
            }
            var temp = [this.state.shows[x].title]
            temp.push(toPrint)
            var check = true;
            for(let q = 0; q < this.state.results.length; q++){
              if(this.state.results[q][0] === this.state.shows[x].title){
                check = false;
              }
            }
            if(check){
              this.setState({results: [...this.state.results, temp]})
            }
            
            break;
          }
        }
      }
    }

    handleChange(e){
      this.setState({fname:e.target.value});
    }
    handleClick(e){
        if(this.state.arr.length < 1){
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
            <Button onClick ={() => this.setState({arr:[], results: []})} variant="warning">Reset</Button>
          </span>
          <span>
            <Button onClick={this.handleSubmit}>Generate Reccomendations</Button>
          </span>
        </div>
        
        <h5>{this.state.results.map((goal, index) => <Alert variant='info' key={index}>Since You Enjoy {goal[0]}, You Might Also Enjoy 
        <h5>{goal[1].map((drip, inde) => <Alert variant='info' key={inde}>{drip}</Alert>)}</h5></Alert>)}</h5>
        
      </div>
      )
    }
  }
  
  export default Textbox;