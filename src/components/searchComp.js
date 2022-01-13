import { Input, TextField } from "@mui/material";
import {Component} from "react";
import '../App.css'
class SearchComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:""
        }
    }
    render(){
        return  <TextField fullWidth label="Search by Name" onChange={(e)=>this.props.cbk(e.target.value.toLowerCase())} />
    }
}

export default SearchComp