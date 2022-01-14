import React, {Component} from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

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
        return <Box sx={{display:"flex", flexDirection:"column", padding:"5%"}}>
        <Typography  variant ="h3" component="h2" sx={{textAlign:"center"}}>
            Add a new post
        </Typography>
        <TextField required error={!this.state.title} 
            margin="normal" 
            onChange={(e)=>{this.setState({title:e.target.value})}} label="Title"/>

        <TextField required error={!this.state.body} 
            margin="normal" 
            onChange={(e)=>{this.setState({body:e.target.value})}} label="Body"/>
        
        <Grid container gap={2} justifyContent={"center"}>
            <Grid item xs={4}>
                <Button variant="contained" onClick={()=>{
                    if(!this.state.title || !this.state.body){return}
                    this.props.addPost({title:this.state.title,body:this.state.body})
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

export default AddPost