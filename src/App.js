import React from "react";
import Todos from "./components/Todos.js"
import TodosApi from './components/todoData.js'
import InputHandler from './components/input.js'
import "./App.css"
class App extends React.Component {
    constructor(){
      super()
      this.handleChange = this.handleChange.bind(this);
      this.addTodo = this.addTodo.bind(this)
      this.remTodo = this.remTodo.bind(this);
      this.state = {
        appName:'MyDay',
        TodosApi,
      }
    }
generateId(){
  return this.state.TodosApi[this.state.TodosApi.length-1].id + 1
}
addTodo(name){
  this.setState({TodosApi:[...this.state.TodosApi,{name,done:false,id:this.generateId()}]});
  document.querySelector('.controlInput').value = "";
}
remTodo(id){
   this.setState(prevState => {
     const TodosApi  = prevState.TodosApi.filter(todo => todo.id !== id)
     return {
     TodosApi,
   }
   })

 }
//we have an array
handleChange(id,e){
  this.setState(prevState =>{
          const TodosApi = prevState.TodosApi.map(todo => {
            if(todo.id === id ){
              todo.done = !todo.done;
            }
            return todo;
          })
          return {
            TodosApi,
          }
        })

  }

searchTodos(){

}
render(){
       return  (
         <div>
       
       <div className="container" >
       <InputHandler  addTodo={this.addTodo}/>
       <Todos handleChange={this.handleChange} remTodo = {this.remTodo} TodosApi={this.state.TodosApi}/>
       </div>
       </div>
       )

    }
}

export default App;
