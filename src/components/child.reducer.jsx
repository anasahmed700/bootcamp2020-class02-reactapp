// Class 5: context API to change state from child to parent components 

import React, {useReducer} from 'react'
import CounterReducer from './reducer'

const ChildReducer = () => {
    let [state, dispatch] = useReducer(CounterReducer, 1)

    return (
        <div>
            <h2>This child is using Reducer hook</h2>
            <h3>Context value is: {state}</h3>
            <button onClick={() => {dispatch("INCREMENT")}}>
                Increment Reducer
            </button>
            <button onClick={() => {dispatch("DECREMENT")}}>
                Decrement Reducer
            </button>
        </div>
    )
}

export default ChildReducer