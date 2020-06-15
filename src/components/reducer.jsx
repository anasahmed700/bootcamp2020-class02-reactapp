// Class 5: context API to change state from child to parent components 

const CounterReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
            return state + 1
            
        case 'DECREMENT':
            return state - 1
        
        default:
            break
    }
}

export default CounterReducer