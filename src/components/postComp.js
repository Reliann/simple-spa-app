import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React, {Component} from "react";
import '../App.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            post:props.post
        }
    }
    render(){
        return  <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography variant="h6" component={"h3"}>
                    {this.state.post.title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {this.state.post.body}
            </AccordionDetails>
        </Accordion>
    }
}

export default Post