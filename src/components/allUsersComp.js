import {Component} from "react";
import dataUtils from "./dataUtils";
import UserComp from "./userComp";
import SearchComp from "./searchComp";
import AddUser from "./addUserComp";
import '../App.css'
import { Box, Button, Dialog, Grid, Paper, Typography } from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

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
            filteredUsers = this.state.users.filter(user => (user.name.toLowerCase().includes(this.state.search)))
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
        
            return  <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <Typography variant="h2" component="h1" sx={{textAlign:"center"}}>
                    Users from JPH!
                </Typography>
                <Paper variant="outlined" sx={{marginY:"2vh",width:"100%",display:"flex", justifyContent:"center"}}>
                <Box sx={{gap:"5vw", marginY:"2vh", width:"60%"}} display={"flex"} justifyContent={"center"}>
                    <SearchComp cbk={(value)=>{this.setState({search:value})}}/>
                    <Button sx={{bgcolor:"secondary", width:"30%"}} variant="contained" startIcon={<PersonAddAltIcon/>} onClick={()=>{this.setState({newUserScreen:true})}}>Add User</Button>
                </Box>
                </Paper>

                        
                <Grid container gap={2} alignItems="none"  justifyContent={"center"}>
                    {this.state.usersToShow.map(user=> (
                        <Grid item xs={3}>
                        <UserComp key={user.id} user={user} idToDelete={id=>this.setState({idToDelete:id})} userToUpdate={user=>this.setState({userToUpdate:user})} />
                        </Grid>
                    ))}
                </Grid>
                <Dialog open={this.state.newUserScreen} onClose={()=>{this.setState((prev)=>({...prev,newUserScreen:false}))}}>
                    <AddUser addUser = {(user)=>{user.id = this.state.lastId ; this.setState(prev=>({lastId:prev.lastId+1,addedUser:user, newUserScreen:false}))}} opCanceled = {()=>{this.setState({newUserScreen:false})}}/>
                </Dialog>
            </Box>
    }
}

export default AllUsers