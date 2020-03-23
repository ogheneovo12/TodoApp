import React from "react";
import TodoItem from "./TodoItem.js"
import noTodo from "../logo.svg"


class Todos extends React.Component {
    constructor(props){
       super(props);
       this.state ={
           filteredTodos:[]
       }
    }
    componentDidMount(){
        this.setState({filteredTodos:this.props.TodosApi})
    }
   static  getDerivedStateFromProps(nextProps){
           return{
               filteredTodos:nextProps.filtered
           }
    }
    render () {
       if(this.state.filteredTodos.length !== 0){
        return (
        <ul >
       {this.state.filteredTodos.map((todo,index) => <TodoItem {...todo}  handleChange={this.props.handleChange} remTodo={this.props.remTodo} key = {todo.id}/> )}
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
