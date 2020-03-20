import React from "react";
import TodoItem from "./TodoItem.js"



class Todos extends React.Component {
    render () {

        return (

        <ul >
       {this.props.TodosApi.map((todo,index) => <TodoItem {...todo} handleChange={this.props.handleChange} remTodo={this.props.remTodo} key = {todo.id}/> )}
        </ul>

        )
    }
}

export default Todos;
