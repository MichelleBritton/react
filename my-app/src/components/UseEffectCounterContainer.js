import React, { useState } from 'react'
import UseEffectCounter from './UseEffectCounter'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true);
  
    return (
        <div>
            <button onClick={ () => {
                // Whatever state display is currently, this will set it to the opposite
                setDisplay(!display)
            }}>
                Toggle Display
            </button>
            {/* Render the UseEffectCounter component if display is equal to true and hide it if false */}
            {display && <UseEffectCounter />}
        </div>
    )
}

export default UseEffectCounterContainer