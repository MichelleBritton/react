import React, {useState} from 'react'
// useState is in curly braces as it is a named export and not a default export

function ControlledFormHooks() {
    // To convert this into using hooks
    // this.state = {
    //     name: '',
    //     category: 'website',
    //     comments: ''
    //  }
    // To match the functionality of the class component we need both a state property name and a method to update it. To do that, we can
    // use destrucuring to define name and setName and set them equal to useState, passing it the initial value of name which will be an empty string
    // The useState hook takes the initial value of the desired state property as a parameter, in this case an empty string and returns the state
    // property with its initial value set and a method to update it (setName is the method). You can call these properties anything you want but hte convention is to
    // set your property name to whatever you want to call it in the state and then call its updater "set" followed by whatever the property name is
    const [name, setName] = useState('');
    const [category, setCategory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comments);
    }

    return (
        <div>            
            <h2>Please fill out the form below:</h2>
            {/* remove this reference to this */}
            {/* <form onSubmit={this.handleSubmit}> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                        // Change this: 
                        // value={this.state.category}
                        // onChange={this.handleCategoryChange}
                        // to
                        value={name}
                        // setName is the new handler. By passing it as an arrow function that takes the event as a parameter.  The function then
                        // returns a call to setName, passing it to event.target.value which will be used to updated teh name variable. So whatever
                        // you want the new value to be, you just pass it into the setter function you created with the useState hook
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id="id-name" 
                        name="name" 
                        type="text" 
                    />
                </div>
                
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select 
                        value={category}
                        onChange={
                            (e) => setCategory(e.target.value)
                        }
                        id="id-category" 
                        name="category"
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General enquiry</option>
                    </select>
                </div>

                <div>
                    <label htmlFor='id-comments'>Comments:</label>
                    <textarea 
                        value={comments}
                        onChange={
                            (e) => setComments(e.target.value)
                        }
                        id="id-comments" 
                        name='comments' 
                    />
                </div>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks