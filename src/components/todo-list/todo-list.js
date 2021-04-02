import React from 'react';
import TodoListItem from './../todo-list-item/todo-list-item';
import  './todo-list.css';

const TodoList = ({data})=>{
    // console.log(data);
    const elements = data.map((item)=>{
        const {id, ...itemProps} = item;
        console.log(itemProps)
        return(
            <li className="list-group-item todo-list-item" key={id}> <TodoListItem {...itemProps} /></li>
        );
    })
    return (
        <ul className="list-group todo-list">
           {elements}
        </ul>
    )
};

export default TodoList;