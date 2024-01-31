import React, { useState } from 'react'

function HooksCounter(props) {
    // count: a new state property
    // setCount: a method to update count
    // useState(0): initialize count to 0
    const [count, setCount] = useState(0);

    return (
        <div className='greeting'>
            <h1>
                Hello {props.name}!
                I'm a functional component with hooks!
            </h1>

            {/* Working with prevState and hooks
            We are passing to teh setter function useState hook an arrow function that takes the previous value of the state property, and that function
            returns count + 1. When updating the state based on the previous state using the useState hook, rather than just passing    
            the setter function teh new value to go in the state, instead you should pass it an arrow function that takes the previous value as a parameter and
            returns the new value based on the previous. */}

            <h2>You clicked {count} times</h2>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Counter
            </button>
        </div>
    )
}

export default HooksCounter