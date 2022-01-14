import React, {Component} from "react";
import Todo from "./todoComp";
import AddTask from "./addTaskComp";
import '../App.css'
import { AppBar, Box, Button, Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            todoList:props.todos,
            todoToUpdate:{},
            showAddInput:false,
            todoToAdd:true
        }
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.todoToUpdate!==this.state.todoToUpdate){
            const updatedTodos = this.state.todoList.map(todo=>{
                if (this.state.todoToUpdate.id === todo.id){
                    return this.state.todoToUpdate
                }else{
                    return todo
                }
            })
            this.setState({todoList:updatedTodos})
            this.props.listUpdate(updatedTodos)
        }
        else if(this.state.todoToAdd ){
            this.setState(prev=>({...prev,todoToAdd:false}))
            this.props.listUpdate(this.state.todoList)
        }
    }
    render(){
        if (this.state.showAddInput){
            return <AddTask opCanceled = {()=>{this.setState({showAddInput:false})}} addTask={(taskName)=>{
                this.setState((prev)=>({showAddInput:false, todoToAdd:true,
                todoList:[{
                    title:taskName,
                    completed:false,
                    userId:this.props.id,
                    id:`${this.props.id}${prev.todoList.length+1}`
                }, ...prev.todoList]}))
            }}/>
        }
        else{
            return  <Box>
                <AppBar position="sticky" sx={{marginBottom:"2vh"}} color="secondary">
                    <Grid container>
                    <Grid item xs={11}>
                        <Button sx={{ my: 1, color: 'white', textAlign:"center" }}  onClick={()=>{this.setState({showAddInput:true})}} endIcon={<AddIcon/>}>
                            Add Todo
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={()=>{this.props.toClose()}}>
                            <CloseIcon sx={{fill:"red"}}/>
                        </IconButton>
                    </Grid>
                    </Grid>
                </AppBar>
                <Box display="flex" flexDirection={"column"}>
                    {this.state.todoList.map((todo)=>{
                        return <Todo key={todo.id} todo={todo} todoUpdate={(todo)=>{this.setState({todoToUpdate:todo})}}/>
                    })}
                </Box>
            </Box>
                
        }
    }
}

export default TodoList