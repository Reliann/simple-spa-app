import React, {Component} from "react";
import '../App.css'
import TodoList from "./allTodosComp";
import PostList from "./allPostsComp";
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Collapse, Dialog, Grid, IconButton, TextField, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

class UserComp extends Component{
    constructor(props){
        super(props)
        this.state={
            moreData:false,
            user:this.props.user,
            todoList:false,
            postList:false
        }
    }
    
    render(){
        
        return(
            <Card sx={{border:this.state.user.todos.every(todo=>(todo.completed))?" 2px solid #33ff6d":"2px solid #ff334e"}}> 
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor:"secondary.light"}}>
                            {this.state.user.id}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={()=>{this.props.idToDelete(this.state.user.id)}}>
                            <DeleteIcon sx={{fill:"red"}} />
                        </IconButton>
                    }
                title={this.state.user.name}
            />         
        <Box display="flex" flexDirection="column" justifyContent="center"  
            sx={{ paddingX:"4%"}}>
            

            <TextField
                margin="dense"
                label="Name"
                value={this.state.user.name}
                variant="filled"
                onChange={(e)=>{this.setState((prev)=>({...prev,user:{...prev.user,name:e.target.value}}))}}
            />
            <TextField
                margin="dense"
                label="Email"
                value={this.state.user.email}
                variant="filled"
                onChange={(e)=>{this.setState((prev)=>({...prev,user:{...prev.user,email:e.target.value}}))}}
            />
            <Button  onClick={()=>{this.setState(prev=>({...prev,moreData:!prev.moreData}))}}>{this.state.moreData?<ExpandLessIcon/>:<ExpandMoreIcon/>}</Button>
            <Collapse in={this.state.moreData}>
                <Box display="flex" flexDirection={"column"} justifyContent="center">
                    <TextField
                        margin="dense"
                        label="City"
                        value={this.state.user.address.city}
                        variant="filled"
                        onChange={(e)=>{this.setState((prev)=>({...prev,user:{...prev.user,address:{...prev.user.address,city:e.target.value}}}))}}
                    />
                    <TextField
                        margin="dense"
                        label="Street"
                        value={this.state.user.address.street}
                        variant="filled"
                        onChange={(e)=>{this.setState((prev)=>({...prev,user:{...prev.user,address:{...prev.user.address,street:e.target.value}}}))}}
                    />
                    <TextField
                        margin="dense"
                        label="Zip-Code"
                        value={this.state.user.address.zipcode}
                        variant="filled"
                        onChange={(e)=>{this.setState((prev)=>({...prev,user:{...prev.user,address:{...prev.user.address,zipcode:e.target.value}}}))}}
                    />
                </Box>
                
            </Collapse>

            <CardActions sx={{justifyContent:"center"}}>
                <Button sx={{color:"primary.light"}}  onClick={()=>{this.props.userToUpdate(this.state.user)}}>Update</Button>
                <Button sx={{color:"primary.light"}}  onClick={()=>{this.setState({todoList:true})}}>Todos</Button>
                <Button sx={{color:"primary.light"}} onClick={()=>{this.setState({postList:true})}}>Posts</Button>
            </CardActions>
                
            <Dialog open={this.state.todoList} onClose={()=>(this.setState((prev)=>({...prev, todoList:false})))}>
                <TodoList toClose={()=>{this.setState({todoList:false})}} todos={this.state.user.todos} id={this.state.user.id}  listUpdate={(updatedList)=>{
                    this.setState((prev)=>({...prev,user:{...prev.user,todos:updatedList}}))
                    this.props.userToUpdate(this.state.user)
                }}/>
            </Dialog>     
            <Dialog open={this.state.postList} onClose={()=>(this.setState((prev)=>({...prev, postList:false})))}>
                <PostList toClose={()=>{this.setState({postList:false})}} posts={this.state.user.posts} id={this.state.user.id} listUpdate={(updatedList)=>{
                    this.setState((prev)=>({...prev,user:{...prev.user,posts:updatedList}}))
                    this.props.userToUpdate(this.state.user)
                }}/>

            </Dialog>
        </Box></Card>
        )}
    }


export default UserComp