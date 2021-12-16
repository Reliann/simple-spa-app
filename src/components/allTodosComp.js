import React, {Component} from "react";
import Todo from "./todoComp";
import AddTask from "./addTaskComp";
import '../App.css'

class TodoList extends Component{
    constructor(props){
        super(props)
        this.state={
            todoList:props.todos,
            todoToUpdate:{},
            showAddInput:false,
            todoToAdd:null
        }
    }
    componentDidUpdate(prevProps,prevState){
        if (prevState.todoToUpdate!==this.state.todoToUpdate){
            const updatedTodos = this.state.todoList.map(todo=>{
                if (this.state.todoToUpdate.id === todo.id){
                    return this.state.todoToUpdate
                }else{
                    return todo
                }
            })
            this.setState({todoList:updatedTodos})
            this.props.listUpdate(updatedTodos)
        }
        else if(prevState.todoToAdd !== this.state.todoToAdd &&  this.state.todoToAdd ){
            const updatedTodos = [this.state.todoToAdd,...this.state.todoList]
            this.setState({todoList:updatedTodos})
            this.props.listUpdate(updatedTodos)
        }
    }
    render(){
        if (this.state.showAddInput){
            return <AddTask opCanceled = {()=>{this.setState({showAddInput:false})}} addTask={(taskName)=>{this.setState({showAddInput:false,todoToAdd:{
                title:taskName,
                completed:false,
                userId:this.props.id,
                id:this.state.todoList.length+1
            }})}}/>
        }
        else{
            return  <div className="inline-block">
                <input type="button" value="Add Todo" onClick={()=>{this.setState({showAddInput:true})}}/>
                <div className="itemList">
                    {this.state.todoList.map((todo)=>{
                        return <Todo key={todo.id} todo={todo} todoUpdate={(todo)=>{this.setState({todoToUpdate:todo})}}/>
                    })}
                </div>
            </div>
        }
    }
}

export default TodoList