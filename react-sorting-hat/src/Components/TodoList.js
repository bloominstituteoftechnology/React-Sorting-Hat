import Todo from './Todo';
import React from "react";


const TodoList = props => {
    return (
        <div className='todo-list'>
            {props.todo.map(item => {
                return (
                    <Todo 
                        item={item}
                        toggleItem={props.toggleItem}
                    />
                )
            })}
        </div>
    );
};



export default TodoList;