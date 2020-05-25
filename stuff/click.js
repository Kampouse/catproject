import React, { Component } from "react";
import uniqueId from "react-html-id";
import sleep from "./sleep.jpg"; 
import styled from "styled-components";


const Hover = styled.div`
  background-color: #008cba;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  transition:3s;
  &:hover {
 
    color: red;
    background-color: #008CBA;
    transition:3s;
  }
   
`





class click extends Component {
  constructor(props) {
    super(props);
    uniqueId.enableUniqueIds(this);

    this.state = { message: "kamp", active: false, list: [] };
  }

  button = (event) => {
    this.setState({ active: true });
    this.save();
  };
  click = (event) => {
    this.setState({
      message: event.target.value
    });
  };
  off = (event) => {
    this.setState({ active: false, message:""});
  };
  save = (event) => {
    if (this.state.message !== "") {
      this.state.list.push(this.state.message);
      this.setState(this.state.list);
      console.log( this.state.message )
    
    }
  };
  remove = (event) => {
    this.state.list.pop();
    this.setState(this.state.list);
  };

  remove_first = (event) => {
    this.state.list.shift()
    this.setState(this.state.list)
  };

  handlepress = (event) => {
    if (event.key === "Enter") {
      this.button()

    }
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.save()
      this.sendThru()
      
    }
  };
  sendThru() {
    this.text.value = " ";
    this.setState({ message:"" })
  }
  itemClick(index,nom) {
    console.log("brr", index,nom)
     
 

  }
  
 


  render() {
    if (this.state.active === true)
      return (
        <div>
          <Button className="Topbutton" onClick={this.off}>
            back
             
          </Button>
          <Button className="Topbutton" onClick={this.save}>
            saveLastelement
          </Button>
          <Button className="Topbutton" onClick={this.remove}>
            remove
          </Button>
          <Button className="Topbutton" onClick={this.remove_first}>
            removeFirst
          </Button>
          <input
            className="Topbutton"
            ref={(el) => (this.text = el)}
            value={this.message}
            onChange={this.click}
            onKeyPress={this.handleKeyPress}
          ></input>
            <div className="Container">
            
           
              return (
              {this.state.list.map((nom, index) => {
                return (
                  <h1 onClick={() => (this.itemClick(index, nom))} className="textbox" key={this.nextUniqueId()}>
                    {nom}
                  </h1>
                
                );
              
              })}
              
            </div>
        </div>
            
      );

    else {
      return (
        <div>
          <button className="Topbutton" onClick={this.button}>
            this me
          </button>
          <input
            className="Topbutton"
            type="text"
            value={this.message}
            onChange={this.click}
            onKeyPress={this.handlepress}
          ></input>
          
          
        <div className="Overlay" ><h1 className = "Texto">fuck</h1></div>
        </div>
      );
    }
  }
}

export default click;
