import React, { useState,useEffect } from "react";
import { useStore } from "kedge";
import store from "./store";
 export default function Catfact2() {
  const fetchable = useStore(store.fetchable);
    const [fact, setfact] = useState("");
     const [isfecthing, setfetch] = useState(1)
     const message = useStore(store.message); 
     
  return (
    <div>
          <h1 className="textbox"> {message}</h1>
    </div>
  );
}
