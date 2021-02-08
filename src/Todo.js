import React from "react";
import "./todo.css";

function Todo({text, id}) {
    
	return (
		<div>
			<h3 id={id}>{text} todo</h3>
		</div>
	)
}

export default Todo;