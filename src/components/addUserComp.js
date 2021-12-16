import React, {Component} from "react";
import '../App.css'

class AddUser extends Component{
    constructor(){
        super()
        this.state={
            user:{
                id:"",
                name:"",
                email:"",
                address:{
                    city:"",
                    street:"",
                    zipcode:""
                },
                todos:[],
                posts:[]
            }
        }
    }

    render(){
        return  <div>
            Name: <input type="text" placeholder="User Name" onChange={(e)=>{this.setState((prev)=>{
                prev = prev.user
                prev.name= e.target.value
                return {user:prev}
            })}}/>
            Email: <input type="text" placeholder="Email" onChange={(e)=>{this.setState((prev)=>{
                prev = prev.user
                prev.email= e.target.value
                return {user:prev}
            })}}/>
            <input type="button" value="Add Person" onClick={()=>{
                if(!this.state.user.name || !this.state.user.email){return}
                this.props.addUser(this.state.user)
                this.setState(prev=>{
                    prev.user.name =""
                    prev.user.email=""
                    return {user:prev}
                })
            }}/>
            <input type="button" value="Cancel" onClick={()=>{this.props.opCanceled()}}/>
        </div>
    }
}

export default AddUser