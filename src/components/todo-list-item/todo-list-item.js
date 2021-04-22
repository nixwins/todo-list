import React, { Component } from 'react';

import './todo-list-item.css';

export default class TodoListItem extends Component {

    render() {

        const { label, done, important, onDeleted, onToggleDone, onToggleImportant } = this.props;

        let classNames = 'todo-list-item-wrapper';

        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += " important"
        }

        return (
            <div className={classNames}>
                <div className="todo-list-label" onClick={onToggleDone}>{label}</div>
                <div className="btn-group">
                    <button
                        onClick={onToggleImportant}
                        className="btn btn-success btn-important">
                        <i className="fa fa-exclamation" aria-hidden="true"> </i>
                    </button>
                    <button
                        onClick={onDeleted}
                        className="btn btn-danger btn-delete">
                        <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        );
    }
}