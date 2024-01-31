import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);
    const addNums = () => {
        // Use a spread operator and spread the values of the current nums array into the one we want to put into the state and then increase by 1
        // DO NOT USE PUSH OR POP AS IT WILL CREATE BUGS AS , i.e. React won't detect any changes and won't re-render. Best to use map, spread and filter
        setNums([...nums, nums.length + 1]);
    }
    const buggyPushNums = () => {
        nums.push(nums.length + 1);
        setNums(nums);
        console.log(nums);
    }

    // return false when dealing with the last item. Whenever the filter method returns false for an item, that item is left out of the resulting array
    // return idx !== nums.length - 1;: The filtering condition checks whether the current index idx is not equal to the last index of the nums array (nums.length - 1). This effectively removes the last element from the array.
    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }
    return (
        <div>
            <button onClick={addNums}>
                Add Item
            </button>
            <button onClick={buggyPushNums}>
                Buggy Push Item
            </button>
            <button onClick={removeNum}>
                Remove Item
            </button>
            <ul>
                {nums.map(num => <li key={num}>{num}</li>)}
            </ul>
        </div>
    )
}

export default UseStateWithArrays