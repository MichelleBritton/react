import React, { Component } from 'react'
import axios from 'axios';

export class HTTPRequests extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: null
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log(response)
            this.setState({
                // We need to check that it is an array
                posts: Array.isArray(response.data)
                // if response.data is already an array set posts equal to response.data
                ? response.data
                // otherwise we'll manually set it equal to an array containing response.data because we know that response.data will be an object
                // By doing this, whether you request all posts or a specific post the state ends up containing an array of post objects
                : [response.data]
            })
        })
        // To catch any errors that happen
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts:</h2>
                {
                    // Using a ternary conditional, check if the posts has a length and if so return the list of posts, otherwise it will say loading posts
                    posts.length ? (
                        // Iterate through the array of posts and give each one some formatting
                        posts.map(post => (
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By User ID {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        // Check whether this.state.error exists and if so render the error message, otherwise Loading posts
                        this.state.error 
                        ? <p>{this.state.error}</p>
                        : <h4>Loading posts ...</h4>
                    )
                }
            </div>
        )
    }
}

export default HTTPRequests