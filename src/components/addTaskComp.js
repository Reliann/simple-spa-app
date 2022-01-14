import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, {Component} from "react";
import '../App.css'

class AddTask extends Component{
    constructor(){
        super()
        this.state={
            taskName:""
        }
    }

    render(){
        return    <Box sx={{display:"flex", flexDirection:"column", padding:"5%"}}>
        <Typography  variant ="h3" component="h2" sx={{textAlign:"center"}}>
            Add a new task
        </Typography>
        <TextField required error={!this.state.taskName} 
            margin="normal" 
            onChange={(e)=>{this.setState({taskName:e.target.value})}} label="Title"/>
        
        <Grid container gap={2} justifyContent={"center"}>
            <Grid item xs={4}>
                <Button variant="contained" onClick={()=>{
                    if (!this.state.taskName){return}
                    this.props.addTask(this.state.taskName)
                }}>
                    Add
                </Button>
            </Grid>
            <Grid>
                <Button sx={{color:"red"}} onClick={()=>{this.props.opCanceled()}}>
                    cancel
                </Button>
            </Grid>
        </Grid>
    </Box>
    }
}

export default AddTask