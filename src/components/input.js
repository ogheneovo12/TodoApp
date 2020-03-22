import React from "react";

//input is meant to add new item to react todo state or search

const InputHandler = (props) =>(
           <div>
       <div className="formControl">
             <input type="text" className="controlInput" name="todoHandler" onChange={props.onInputChange.bind(this)}/>
             <button className="controlBtn" onClick={props.addTodo}>Add</button>
       </div>
       </div> 
       
       
)



export default InputHandler;