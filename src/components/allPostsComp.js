import React, {Component} from "react";
import Post from "./postComp";
import AddPost from "./addPostComp";
import '../App.css'

class PostList extends Component{
    constructor(props){
        super(props)
        this.state={
            postList:props.posts,
            showAddInput:false,
            postToAdd:{}
        }
    }
    componentDidUpdate(prevProps,prevState){
        
        if(prevState.postToAdd !== this.state.postToAdd &&  this.state.postToAdd !=={} ){
            const new_post = {
                id:this.state.postList.length+1,
                userId:this.props.id,
                title:this.state.postToAdd.title,
                body:this.state.postToAdd.body
            }
            console.log(new_post);
            const updatedTposts = [new_post,...this.state.postList]
            this.setState({postList:updatedTposts})
            this.props.listUpdate(updatedTposts)
        }
    }
    render(){
        if (this.state.showAddInput){
            return <AddPost opCanceled = {()=>{this.setState({showAddInput:false})}} addPost={(post)=>{this.setState({postToAdd:post,showAddInput:false})}}/>
        }
        else{
            return  <div className="inline-block">
                <input type="button" value="Add Post" onClick={()=>{this.setState({showAddInput:true})}}/>
                <div  className="itemList">
                    {this.state.postList.map((post)=>{
                        return <Post key={post.id} post={post} />
                    })}
                </div>
                
            </div>
        }
    }
}

export default PostList