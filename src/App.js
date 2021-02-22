import React from "react";
import logo from './logo.svg';
import './App.css';
import {Form} from "./components/Form/Form";
import {Grid} from "@material-ui/core";
import {Button} from "./components/ButtonCustom/Button";

function App() {
  return (
      <>
        <Button color='grey' onClick={()=>console.log("HOLA")} textColor={'white'}>EL PEPE</Button>
        <Form/>
      </>


  );
}

export default App;
