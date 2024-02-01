import React, {useState, useEffect, Component} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);

    // Mimic ComponentWillUnmount by executing a clean up function using the useEffect hook. 


    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    // Pass it an empty array to tell it to run once only when first mounted
   
   
   // First, we have two parameter to useEffect, the function we're going to execute, and the empty array so that it only executes
   // onces when the component mounts.
   // Next, inside that function we do three things, log "Creating timer" to the console, then create teh interval, and then return the cleanup
   // function.  
   // The update to teh time actually happens inside the interval, where we define both the function to run, ultimate the setTime function and the
   // interval we want to run it at, every 1000 milliseconds.  
   // In the cleanup function, we just clear the interval by passing the clearInterval function the interval we wish to clear.
    useEffect(()=>{
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log('Interval executed');
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log('cleaning up')
            clearInterval(interval);
        }
    }, []);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter