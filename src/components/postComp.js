import React, {Component} from "react";
import '../App.css'

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            post:props.post
        }
    }
    render(){
        return  <div className="item">
            <span>Title: {this.state.post.title}</span><br/>
            <span>Body: {this.state.post.body}</span>
        </div>
    }
}

export default Post