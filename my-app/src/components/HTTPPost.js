import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        apiResponse: null
     }
    }
    postToApi = () => {
        // This function takes two parameters -  a URL we would like to post to and an object containing the data we want to send
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: 'Hello world!',
                body: 'It works',
                userId: 123,
            }
        )
        .then(response => {
            this.setState({
                apiResponse: response.data
            })
        })
    }

    render() {    
        // Destructure apiResponse from this.state
        const {apiResponse} = this.state;
        return (
        <div>
            <button onClick={this.postToApi}>
                Create Post
            </button>

            {
                apiResponse
                ? (<div>
                        <h1>{apiResponse.title}</h1>
                        <p>{apiResponse.body}</p>
                        <p>{apiResponse.id}</p>
                        <p>{apiResponse.userId}</p>
                    </div>)
                : (<p>Please click the button above</p>)
            }            
        </div>
        )
    }
}

export default HTTPPost