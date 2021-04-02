import React from 'react';

import  './todo-list-item.css';

const TodoListItem = ({label, important})=>{
    // console.log(props)
    const style = important ? {color:"red"} : {color:"black"};
    console.log(style)

     return (
                <div className="todo-list-item-wrapper">
                    <div>{label}</div>
                    <div className="btn-group">
                            <button className="btn btn-success btn-important">
                            <i class="fa fa-exclamation" aria-hidden="true"> </i>
                            </button>
                            <button className="btn btn-danger btn-delete">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                    </div>
                </div>
            );
};

export default TodoListItem;