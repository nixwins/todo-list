import React from 'react';
import TodoListItem from '../todo-list-item';

import  './todo-list.css';

const TodoList = ({data, onDeleted, onToggleDone, onToggleImportant})=>{

    const elements = data.map((item)=>{
        const {id, ...itemProps} = item;

        return(
            <li 
                className="list-group-item todo-list-item"
                 key={id}>
                <TodoListItem
                                 {...itemProps}
                                  onDeleted={ () => onDeleted(id) } 
                                  onToggleDone={ ()=> onToggleDone(id) }
                                  onToggleImportant={ ()=> onToggleImportant(id) } />
            </li>
        );
    })

    return (
        <ul className="list-group todo-list">
           {elements}
        </ul>
    )
};

export default TodoList;