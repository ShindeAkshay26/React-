import React, { Component } from "react";

class Fetchapi extends Component {
  constructor(props){
    super(props);
    this.state = {
  data: {},
   };
}

async componentDidMount(){
  const url="https://v2.jokeapi.dev/joke/Programming";
  const response=await fetch(url);
  const data=await response.json();
  this.setState({data});
  console.log(this.state.data.setup);
}
render()
{
  return(
    <center>
      <div>
        <h1>Jokes</h1>
        {this.state.data.setup}<br></br>
        {this.state.data.delivery}
      </div>
    </center>
  )
}
}

export default Fetchapi;