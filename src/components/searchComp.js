import React, {Component} from "react";
import '../App.css'
class SearchComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            search:""
        }
    }
   
    render(){
        return  <div className="searchDiv">
            <input placeholder="search" onChange={(e)=>this.props.cbk(e.target.value.toLowerCase())}/>
            {/* <input type="button" value="Search" onClick={()=>{this.props.cbk(this.state.search)}}/> */}
        </div>
    }
}

export default SearchComp