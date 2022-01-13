import { Box, Button, Grid, TextField, Typography } from "@mui/material";
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
        return  <Box sx={{display:"flex", flexDirection:"column", padding:"5%"}}>
            <Typography variant ="h3" component="h2" sx={{textAlign:"center"}}>
                Add a new user!
            </Typography>
            <TextField required error={!this.state.user.name} fullwidth margin="normal" onChange={(e)=>{this.setState((prev)=>({...prev,user:{...prev.user, name:e.target.value}}))}} label="Username"/>
            <TextField required error={!this.state.user.email} fullwidth  margin="normal" onChange={(e)=>{this.setState((prev)=>({...prev,user:{...prev.user, email:e.target.value}}))}} label="Email"/>
            <Grid container gap={2} justifyContent={"center"}>
                <Grid item xs={4}>
                    <Button variant="contained" onClick={()=>{
                        if(!this.state.user.name || !this.state.user.email){return}
                        this.props.addUser(this.state.user)
                    }}>
                        Add
                    </Button>
                </Grid>
                <Grid item xs={4}>
                    <Button  variant="contained" color="error" onClick={()=>{this.props.opCanceled()}}>
                        Cancel
                    </Button>
                </Grid>
                
            </Grid>
        </Box>
    }
}

export default AddUser