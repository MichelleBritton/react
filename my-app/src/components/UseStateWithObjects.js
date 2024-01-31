import React, { useState } from 'react'

function UseStateWithObjects() {
    const [name, setName] = useState({ firstName: "", lastName: ""})
   
    return (
        <div>
            <form>
                <input
                    type='text'
                    value={name.firstName}
                    onChange={e => setName({
                        // By using the spread operator we are speading the current value of the name property into the object we're pushing into
                        // the state with the setName function. By doing this teh entire name object will be copied to the new object and the appropriate 
                        // properties will just be replaced with their new values
                        ...name,
                        firstName: e.target.value
                    })}
                />
                <input
                    type='text'
                    value={name.lastName}
                    onChange={e => setName({
                        ...name,
                        lastName: e.target.value
                    })}
                />
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    )
}

export default UseStateWithObjects