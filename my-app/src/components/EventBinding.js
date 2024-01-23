import React from "react";

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        // 3. Bind the event handler in the constructor
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        });
    }

    // 4. Bind the event handler when you actually define the handler itself by using an arrow function (usually the preferred method)
    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "Enter",
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>

                {/* 1. Use an arrow function to bind the event handler since arrow functions execute in the scope in which they're created, 
                in this case, the React component. If the event handler needs to take parameters this is the easiest way to pass them using
                an arrow function */}
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>

                {/* 2. The second way to bind event handlers to a class component is to call the bind method on the handler
                and pass in this, which, outside the context of the event handler, refers to the class. So what you are saying is you 
                want this in the handleClick method to refer to this from the class and you'll use that as your event handler */}
                <button onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button>

                {/* 3. Bind the event handler in the constructor. By doing it in the constructor you are only doing it once, instead of
                on every render which is better for performance in large applications */}
                <button onClick={this.handleClick}>{this.state.buttonText}</button>

                {/* 4. Bind the event handler when you actually define the handler itself by using an arrow function  */}
                <button onClick={this.handleClick}>{this.state.buttonText}</button>

                {/* Option 4 is the preferred method or option 1 if you need to pass a parameter to the event handler, the other two are 
                seldom used */}
            </div>
        )
    }
}

export default EventBinding;