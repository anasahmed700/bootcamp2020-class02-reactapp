import React, {useState} from "react";
import "./App.css";
import Stateless from "./components/stateless.component.jsx";
import {Message} from "./components/counter.component"
import Parent from "./components/parent.component";
import NewContext from "./components/newContext";
import ChildReducer from "./components/child.reducer";

function App() {
  // Using react hook useState to change component's state
  // [variable, setter]
  let [count, setCount] = useState(1);
  let [isdaylit, setDaylit] = useState(false)

  let countContext = useState(0) // [countContext, setCountContext]

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

      {/* Class 5: context API to change state from child to parent components */}
      <div className="class4">
        <p>Class 5: Change state from child to parent components</p>
        <NewContext.Provider value={countContext}>
        <Parent />
        </NewContext.Provider>
      
        <ChildReducer />
      </div>
    </div>
  );
}

export default App;
