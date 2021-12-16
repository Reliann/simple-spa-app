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
            console.log("marked");
            this.props.todoUpdate(this.state.todo)
        }
    }
    render(){
        return  <div className={(this.state.todo.completed?"completedTasks ":"uncomplededTasks ")+"item"}>
            <span>Title: {this.state.todo.title}</span><br/>
            <span>Status: {this.state.todo.completed?"true":"false"}</span>
            {!this.state.todo.completed&&<input type="button" value="Mark Cpmpleted" onClick={()=>{this.setState(prev=>{
                prev.todo.completed = true
                return {todo:prev.todo}})}}/>
            }
        </div>
    }
}

export default Todo