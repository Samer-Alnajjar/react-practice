// import useCounter from '../hooks/use-counter';
// import { useState } from 'react';
import { useReducer } from 'react';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const VALUE_TO_ADD = 'value_To_Add';
const HANDLE_CHANGE = 'handle_change';


const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case VALUE_TO_ADD:
            return {
                ...state,
                counter: state.counter + Number(state.valueToAdd),
                valueToAdd: 0
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                valueToAdd: action.payload
            }
        default:
            return state
    }
}

function Counter({ initialValue }) {
    // const { counter, increment } = useCounter(initialValue)
    // const [counter, setCounter] = useState(initialValue || 0)
    // const [valueToAdd, setValueToAdd] = useState(0)
    const [state, dispatch] = useReducer(reducer, {
        counter: initialValue || 0,
        valueToAdd: 0
    })

    const increment = (_e) => {
        // setCounter(counter + 1);
        dispatch({ type: INCREMENT })
    }

    const decrement = (_e) => {
        // setCounter(counter - 1);
        dispatch({ type: DECREMENT })

    }

    const handleAddedValue = (e) => {
        e.preventDefault();

        // setCounter(counter + Number(valueToAdd))
        dispatch({ type: VALUE_TO_ADD })
    }

    const handleChange = e => {
        // setValueToAdd(e.target.value)
        dispatch({ type: HANDLE_CHANGE, payload: e.target.value })
    }

    return (
        <div>
            <h2>Count is {state.counter}</h2>
            <button onClick={increment} className="flex border-blue-600 items-center p-2 border-solid border-2 ">Increment</button>
            <hr />
            <button onClick={decrement} className="flex border-blue-600 items-center p-2 border-solid border-2 ">Decrement</button>

            <form onSubmit={handleAddedValue}>
                <input className="flex border-blue-600 items-center p-2 border-solid border-2 " type="number" onChange={handleChange} value={state.valueToAdd || ""} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Counter;
