import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React, {Component} from "react";
import '../App.css'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state={
            todo:props.todo
        }
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.todo != this.state.todo){
            this.props.todoUpdate(this.state.todo)
        }
    }
    render(){
        return  (
        <Box className={(this.state.todo.completed?"completedTasks ":"uncomplededTasks ")+"item"}>
            <Grid container>
                <Grid item xs={11}>
                    <Typography variant="body1" component="h3" textAlign={"center"}>
                        {this.state.todo.title}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Checkbox checked={this.state.todo.completed} disabled={this.state.todo.completed} onChange={()=>{
                        this.setState(prev=>({...prev,todo:{...prev.todo, completed:true}}))
                    }}/>
                </Grid>
            </Grid>
        </Box>)
    }
}

export default Todo