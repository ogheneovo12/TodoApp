import React from "react";
import PropTypes from "prop-types";
// let copy = `&copy`;

function TodoItem(props) {
  return (
    <li
      id="type"
      style={{
        backgroundColor: props.done ? "#fff" : "#09c",
        color: props.done ? "#7c795d" : "#fff"
      }}
    >
      <span
        className="todo-text"
        style={{ textDecoration: props.done ? " line-through" : "none" }}
      >
        {" "}
        {props.name}{" "}
      </span>
      <span className="todo-actions">
        {" "}
        <input
          type="checkbox"
          onChange={props.handleChange.bind(this, props.id)}
          checked={props.done}
        />
        <label></label>
        <button onClick={props.remTodo.bind(this, props.id)}>
          &times;
        </button>{" "}
      </span>
    </li>
  );
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired
};
export default TodoItem;
