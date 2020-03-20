import React from "react";

//input is meant to add new item to react todo state or search

class InputHandler extends React.Component {
   constructor(){
       super();
       this.onChange = this.onChange.bind(this);
       this.state = {
           text:""
       }
       
   }
onChange(e){
   this.setState({text:e.target.value})
}

render (){
       return (
           <div>
       <div className="formControl">
             <input type="text" className="controlInput" name="todoHandler" onChange={this.onChange}/>
             <button className="controlBtn" onClick={this.props.addTodo.bind(this,this.state.text)}>Add</button>
       </div>
       <div> 
       </div>
       </div>
       )
}

}


export default InputHandler;