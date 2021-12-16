import React, {Component} from "react";
import dataUtils from "./dataUtils";
import UserComp from "./userComp";
import SearchComp from "./searchComp";
import AddUser from "./addUserComp";
import '../App.css'
class AllUsers extends Component{
    constructor(){
        super()
        this.state={
            usersToShow:[],
            users:[],
            search:"",
            idToDelete:"",
            userToUpdate:{},
            newUserScreen:false,
            addedUser:{},
            lastId:0
        }
    }
    componentDidMount(){
        dataUtils.getAllUsers().then(users=>{
            this.setState({users:users,usersToShow:users,lastId:users.length+1})
        })
    }

    componentDidUpdate(prevProps,prevState){
        let filteredUsers = this.state.users
        if (prevState.search !== this.state.search && this.state.search) {
            filteredUsers = this.state.users.filter(user => Object.values(user).some(val=>(JSON.stringify(val).toLowerCase().includes(this.state.search))))
            this.setState({usersToShow: filteredUsers})
        }
        else if (prevState.userToUpdate !== this.state.userToUpdate) {
            const index = this.state.users.findIndex((user)=>(user.id===this.state.userToUpdate.id))
            filteredUsers[index]= this.state.userToUpdate
            this.setState({usersToShow: filteredUsers,users:filteredUsers})
        }
        else if(prevState.idToDelete !== this.state.idToDelete){
            filteredUsers = this.state.users.filter((user)=>(user.id!==this.state.idToDelete))
            this.setState({usersToShow: filteredUsers,users:filteredUsers})
        }
        else if(prevState.addedUser !== this.state.addedUser){
            let updatedUsers = this.state.users
            updatedUsers.push(this.state.addedUser)
            this.setState({users:updatedUsers,usersToShow:updatedUsers})
        }
    }

    render(){
        if(!this.state.newUserScreen){
            return  <div>
                        <h3>Users:</h3>
                        <div className="userOptionsBar">
                            <SearchComp cbk={(value)=>{this.setState({search:value})}}/>
                            <input type="button" value="Add New User" onClick={()=>{this.setState({newUserScreen:true})}}/>
                        </div>
                        
                        <div className="usersContainer">
                            {this.state.usersToShow.map(user=> {
                                return <UserComp key={user.id} user={user} idToDelete={id=>this.setState({idToDelete:id})} userToUpdate={user=>this.setState({userToUpdate:user})} />
                            })}
                        </div>
                    </div>
        }
        return <div>
            <AddUser addUser = {(user)=>{user.id = this.state.lastId ; this.setState(prev=>({lastId:prev.lastId+1,addedUser:user, newUserScreen:false}))}} opCanceled = {()=>{this.setState({newUserScreen:false})}}/>
        </div>
        
    }
}

export default AllUsers