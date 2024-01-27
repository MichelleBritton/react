import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         data: 'Child Loading ...',
      }
    }

    getData() {
        console.log('Child getData() called')
        setTimeout(() => {
            console.log('Child Data fetched!')
            this.setState({
                data: 'Child Loaded!'
            })
        }, 3000)
    }

    componentDidMount() {
        console.log('Child Component mounted')
        this.getData();
    }

    render() {
        console.log('Child Render method called')
        return (
        <div>{this.state.data}</div>
        )
    }
}

export default LifeCyclesCDMChild