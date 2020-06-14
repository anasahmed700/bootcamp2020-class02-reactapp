import React, {useState} from "react";
import "./App.css";
import Stateless from "./components/stateless.component.jsx";
import {Message} from "./components/counter.component"

function App() {
  // Using react hook useState to change component's state
  // [variable, setter]
  let [count, setCount] = useState(1);
  let [isdaylit, setDaylit] = useState(false)

  return (
    <div className="App">
      {/* Class 3 functional components & props */}
      <Stateless newProp="Property 1" />
      <hr />
      <Stateless newProp="Property 2" />

      {/* Class 4 change state in functional components using setState hook */}
      <div className={isdaylit ? 'morning' : 'night'}>
        <Message counter={count}/>
        <button onClick={() => setCount(++count)}>Counter</button>
        <h3>Have a good {isdaylit ? "Morning" : "Night"}</h3>
        <button onClick={() => setDaylit(!isdaylit)}>Switch daylight</button>
      </div>
    </div>
  );
}

export default App;
