import React from "react";
import TodoItem from "./TodoItem.js"
import noTodo from "../logo.svg"


class Todos extends React.Component {
    
   static  getDerivedStateFromProps(nextProps){
           return{
               filteredTodos:nextProps.filtered
           }
    }
    render () {
       if(this.props.filtered.length !== 0){
        return (
        <ul >
       {this.props.filtered.map((todo,index) => <TodoItem {...todo}  handleChange={this.props.handleChange} remTodo={this.props.remTodo} key = {todo.id}/> )}
        </ul>
        )}
        else{
            return (
                <div className="noTodo"><img className="logo" src={noTodo} alt="todo not found"/>
            <p style={{textAlign:"center"}}>No Todo Item found, Add this</p>
                </div>
               
            )
        }
    }
}

export default Todos;
