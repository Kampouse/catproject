import React, { Component } from 'react'

 class catfact extends Component {
   constructor(props) {
     super(props);

     this.state = {
       say: [],
     };
   }

   catfact = () => {
     fetch("https://catfact.ninja/fact?max_length=140", {
       methode: "GET",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
       },
     })
       .then((fact) => fact.json())
       .then((fact) => this.setState({ say: fact }));
   };

   componentDidMount() {
     this.catfact()
   }
   
   render() {
    const { cat, fact } = this.state.say;

     return (
       <div>
         <h1 onClick={this.catfact} className="textbox lazyload">{fact}</h1>
         
        
 
       </div>
     );
   }
 }

export default catfact
