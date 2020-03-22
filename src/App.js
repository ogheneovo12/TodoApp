import React from "react";
import Todos from "./components/Todos.js"
import TodosApi from './components/todoData.js'
import InputHandler from './components/input.js'
import "./App.css"
class App extends React.Component {
    constructor(){
      super()
      this.onInputChange = this.onInputChange.bind(this)
      this.handleChange = this.handleChange.bind(this);
      this.addTodo = this.addTodo.bind(this)
      this.remTodo = this.remTodo.bind(this);
      this.state = {
        appName:'MyDay',
        TodosApi:TodosApi.sort((a,b)=>b.id - a.id),
        text:""
      }
    }
generateId(){
  if(!(this.state.TodosApi.length === 0)){
  return this.state.TodosApi[0].id + 1;
  }else{
    return 0;
  }
}
onInputChange(e){
    this.setState({text:e.target.value});
}
addTodo(){
  const name = this.state.text;
  this.setState({TodosApi:[{name,done:false,id:this.generateId()},...this.state.TodosApi,]});
  document.querySelector('.controlInput').value = "";
  this.setState({text:''});
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
       <input type="checkbox" id="sidebarShown" hidden />
       <div className="container" >
       <InputHandler onInputChange={this.onInputChange}  addTodo={this.addTodo}/>
       <Todos handleChange={this.handleChange} remTodo = {this.remTodo} TodosApi={this.state.TodosApi}/>
       </div>
       </div>
       )

    }
}

export default App;
