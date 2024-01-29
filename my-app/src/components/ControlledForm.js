import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         category: 'website',
         comments: ''
      }
    }

    // Whenever you assign an event handler to onChange the event itself will be implicitly passed into the handler as a parameter
    // So our arrow function in this case will take a parameter called event.  We can use this parameter to get the value of the field each
    // time the event happens, so within the function we can set a variable equal to event.target.value. This variable will represent the value of the 
    // form field each time the onChange event is triggered. Any other inputs in the form can be controlled in the same way, all you need to do
    // is create a controlled component to capture the onChange event from each form field you want React to control and make sure that it has a 
    // matching property in the state so you can set its value accordingly
    // We can change this so that we have just one change handler for all input fields in our form by using the computed property names i.e. [name]: value
     // One change handler method
    //  handleChange = (event) => {
    //     const {name, value} = event.target
    //     this.setState({
    //         [name]: value
    //     })
    // }
   
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

   
    render() {
        return (
        <div>
            {/* Uncontrolled form
                This submits a GET request attaching the value of the name input to the end of the URL but this refreshes the page
                We want the component to function independently without out changing the rest of the page or app.  This form is considered
                uncontrolled since the DOM is controlling everything it does. React is rendering the form but the submission is handled by the 
                DOM which cause the page refresh.
                We can give control of the element to React by using state.
             */}
            {/* <form>
                <label htmlFor="id-name">Your Name:</label>
                <input id="id-name" name="name" type="text" />
                <input type="submit" value="Submit" />
            </form> */}

            {/* Controlled Form 
                Add name to the state and change the value in the form so we're saying here is that we want this particular input's value to be
                the same as whatever the value of "name" is in the state of this component.  This allows React to control the value of the input in its own state and removes
                control from the DOM
            */}
            <h2>Please fill out the form below:</h2>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input 
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        id="id-name" 
                        name="name" 
                        type="text" 
                    />
                </div>
                
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select 
                        value={this.state.category}
                        onChange={this.handleCategoryChange}
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
                        value={this.state.comments}
                        onChange={this.handleCommentsChange}
                        id="id-comments" 
                        name='comments' 
                    />
                </div>
                
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}

export default ControlledForm