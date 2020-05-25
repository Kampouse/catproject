import { useStore } from "kedge";
import store from "./store";
export default function dog() {
  fetch("https://catfact.ninja/fact?max_length=140", {
    methode: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((fact) => fact.json())
    .then((fact) => store.message.set(fact.fact));
}
 
