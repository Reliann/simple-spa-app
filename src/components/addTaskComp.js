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
        return  <div>
            title: <input type="text" placeholder="enter new task title" onChange={(e)=>{this.setState({taskName:e.target.value})}}/>
            <input type="button" value="Add Task" onClick={()=>{
                if (!this.state.taskName){return}
                this.props.addTask(this.state.taskName)
                this.setState({taskName:""})}}/>
            <input type="button" value="Cancel" onClick={()=>{this.props.opCanceled()}}/>
        </div>
    }
}

export default AddTask