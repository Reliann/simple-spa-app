import React, {Component} from "react";
import Post from "./postComp";
import AddPost from "./addPostComp";
import '../App.css'
import { Accordion, AppBar, Box, Button, Grid, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

class PostList extends Component{
    constructor(props){
        super(props)
        this.state={
            postList:props.posts,
            showAddInput:false,
            postToAdd:false
        }
    }
    componentDidUpdate(prevProps,prevState){
        
        if(this.state.postToAdd){

            this.setState({postToAdd:false})
            this.props.listUpdate(this.state.postList)
        }
    }
    render(){
        if (this.state.showAddInput){
            return <AddPost opCanceled = {()=>{this.setState({showAddInput:false})}} 
                addPost={(post)=>{this.setState(prev=>({postToAdd:true,showAddInput:false, 
                    postList:[{
                        id:`${this.props.id}${prev.postList.length+1}`,
                        userId:this.props.id,
                        title:post.title,
                        body:post.body
                    },...prev.postList]}))}}
            />
        }
        else{
            return  <Box>
                <AppBar position="sticky" sx={{marginBottom:"2vh", padding:"0"}} color="secondary">
                    <Grid container height={""}>
                    <Grid item xs={11}>
                        <Button sx={{ my: 1, color: 'white', textAlign:"center" }}  onClick={()=>{this.setState({showAddInput:true})}} endIcon={<AddIcon/>}>
                            Add post
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton onClick={()=>{this.props.toClose()}}>
                            <CloseIcon sx={{fill:"red"}}/>
                        </IconButton>
                    </Grid>
                    </Grid>
                </AppBar>
                    <Box sx={{paddingX:"4%", }}>
                        {this.state.postList.map((post)=>{
                            return <Post key={post.id} post={post} />
                        })}
                    </Box>
                    
                
            </Box>
        }
    }
}

export default PostList