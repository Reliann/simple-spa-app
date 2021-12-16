import React, {Component} from "react";
import '../App.css'

class AddPost extends Component{
    constructor(){
        super()
        this.state={
            title:"",
            body:""
        }
    }

    render(){
        return  <div>
            title: <input type="text" placeholder="enter new post title" onChange={(e)=>{this.setState({title:e.target.value})}}/>
            Body: <input type="text" placeholder="enter new post body" onChange={(e)=>{this.setState({body:e.target.value})}}/>
            <input type="button" value="Add Post" onClick={()=>{
                if(!this.state.title || !this.state.body){return}
                this.props.addPost({title:this.state.title,body:this.state.body})
                this.setState({title:"",body:""})
                }}/>
            <input type="button" value="Cancel" onClick={()=>{this.props.opCanceled()}}/>
        </div>
    }
}

export default AddPost