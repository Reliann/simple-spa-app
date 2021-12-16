import React, {Component} from "react";
import '../App.css'
import TodoList from "./allTodosComp";
import PostList from "./allPostsComp";
class UserComp extends Component{
    constructor(props){
        super(props)
        this.state={
            moreData:false,
            user:this.props.user,
            lists:false
        }
    }

    render(){
        let addressData = <div>
            City: <input value={this.state.user.address.city} onChange={(e)=>{this.setState((prev)=>{
                prev.user.address.city=e.target.value;
                return {user:prev.user}})}}/><br/>
            Street: <input value={this.state.user.address.street} onChange={(e)=>{this.setState((prev)=>{
                prev.user.address.street=e.target.value;
                return {user:prev.user}})}}/><br/>
            Zip-Code: <input value={this.state.user.address.zipcode} onChange={(e)=>{this.setState((prev)=>{
                console.log(prev);
                prev.user.address.zipcode=e.target.value;
                return {user:prev.user}})}}/><br/>
        </div>
        if (this.state.lists){
            return <div className="redBackground userLists">
                <input type="button" value="close" onClick={()=>{this.setState({lists:false})}}/>
                <div className="UserListsContainer">       
                        <TodoList todos={this.state.user.todos} id={this.state.user.id}  listUpdate={(updatedList)=>{this.setState((prev)=>{
                            let updatedUser = prev.user
                            updatedUser.todos= updatedList
                            return {user:updatedUser}
                        })
                        this.props.userToUpdate(this.state.user)
                        }}/>
                        <PostList posts={this.state.user.posts} id={this.state.user.id} listUpdate={(updatedList)=>{this.setState((prev)=>{
                            let updatedUser = prev.user
                            updatedUser.posts= updatedList
                            return {user:updatedUser}
                        })
                        this.props.userToUpdate(this.state.user)
                        }}/>
                </div>
            </div>
        }
        return  <div className={this.state.user.todos.every(todo=>(todo.completed))?"completedTasks":"uncomplededTasks"}>
            <span onClick={()=>{this.setState({lists:true})}}>ID: {this.state.user.id}</span><br/>
            Name: <input value={this.state.user.name} onChange={(e)=>{this.setState((prev)=>{
                prev.user.name=e.target.value;
                return {user:prev.user}})}}/><br/>
            Email: <input value={this.state.user.email} onChange={(e)=>{this.setState((prev)=>{
                prev.user.email=e.target.value;
                return {user:prev.user}})}}/><br/>
            <input type="button" value="Other Data" onMouseEnter={()=>{this.setState({moreData:true})}} onClick={()=>{this.setState({moreData:false})}}/><br/>
            {this.state.moreData&&addressData}
            <input type="button" value="Update" onClick={()=>{this.props.userToUpdate(this.state.user)}}/>
            <input type="button" value="Delete" onClick={()=>{this.props.idToDelete(this.state.user.id)}}/>
            
        </div>
    }
}

export default UserComp