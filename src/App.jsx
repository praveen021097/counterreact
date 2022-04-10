
import './App.css';
import {useState} from "react";
function App() {

  const  [counter ,setCounter]=useState(0);

  const handleCounter = (value)=>{
    setCounter(counter+value);
  }
  const handleDouble =()=>{
    setCounter(counter*2);
  }
  return (
    <div className="App">
      <h1>Counter :{counter}</h1>
      <button onClick={()=>{handleCounter(1)}}>increament</button>
      <button onClick={()=>{handleCounter(-1)}}>decreament</button>
      <button onClick={()=>{handleDouble()}}>double</button>

      <div>Number is {counter%2==0?"even":"odd"}</div>
    </div>
  );
}

export default App;
