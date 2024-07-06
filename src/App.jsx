import { useState } from "react";
import Axios from "axios";
import './App.css'
function App() {
  
  const [dogImg,setDogImg]=useState("");
  const [dogName,setDogName]=useState("");
 function dogGenerator(){
     Axios.get(import.meta.env.VITE_API_KEY).then((res)=>{
      setDogImg(res.data.message)
      const url=res.data.message.split('/');
     setDogName(url[4]);
     })
     
  }
     
 
  return (
    <>
    <h1>Dog Breed Generator</h1>
    <button onClick={dogGenerator}>Generate Dogs</button>
    <h2>{dogName}
    </h2>
    <img src={dogImg} width="550px"/>
    </>
  )
}

export default App
