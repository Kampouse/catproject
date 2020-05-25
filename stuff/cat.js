import React, { useState,useEffect } from "react";
import { useStore } from "kedge";
import store from "./store";
import catfact from "./catfact2"
import  dog from "./api_call"



 


 export default function Cat() {

  const [fetched, setfetch] = useState("false");
  const fetchable = useStore(store.fetchable);
  const message = useStore(store.message) 


   function fetching() {
    
  fetch("https://api.thecatapi.com/v1/images/search?breed_id=sphy", {
    method: "GET",
    headers: { "x-api-key": process.env.APIKEY },
  })
    .then((fact) => fact.json())
    .then((fact) => setfetch(fact))
    .then(dog());
    
   
    
  
   
   }
       useEffect(() => {

         
         fetching()
         
        
       }, []);

   

   return (
    
     <div>
       
      <img
   
        onClick={(fetching)}
        className="Catbox"
        src={fetched[0].url}
      ></img>
    
    </div>
  );
}
