import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItemPanel from '../add-item-panel';
import ItemStatusFilter from '../item-status-filter'

import './app.css';
export default class App extends Component {

    idx = 10000;

    state = {
        data: [
            { id: 1, label: "Do something", important: false, done: false },
            { id: 2, label: "Make me happy", important: false, done: false },
            { id: 3, label: "This for test", important: false, done: false }
        ],
        doneCount: 0,
        undoneCount: 0,
        filter: 'all',
        term: ''
    };

    onDeleted = (id) => {
        this.setState((state) => {
            const idx = this.state.data.findIndex(el => el.id === id)
            return {
                data: [
                    ...state.data.slice(0, idx),
                    ...state.data.slice(idx + 1)
                ]
            }
        });
    };

    addItem = (text) => {

        this.setState((state) => {
            const item = { id: this.idx++, label: text, important: false };
            const { data } = state;
            const newData = [...data, item];

            return { data: newData }
        });
    };

    onToggleImportant = (id) => {

        this.setState((state) => {

            const { data } = state;

            const idx = data.findIndex((el) => el.id === id);

            return this.updateData(data, idx, "important");

        });
    };

    onToggleDone = (id) => {
        this.setState((state) => {

            const { data } = state;
            const idx = data.findIndex((el) => el.id === id);
            return this.updateData(data, idx, "done")
        });
    };

    updateData(data, idx, prop) {

        const oldItem = data.slice(idx, idx + 1);

        const [newItem] = oldItem;
        newItem[prop] = !newItem[prop]

        return [
            ...data.slice(0, idx + 1),
            newItem,
            ...data.slice(idx, idx + 1)];
    };

    onFilterChange = (name) => {
        this.setState({ filter: name })
    }

    filter(items, filter) {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter((el) => !el.done);
            case "done":
                return items.filter((el) => el.done);
            default: return items;
        }
    }

    search(items, term) {

        if (!term) return items;
        return items.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    onSearchChange = (term) => {
        this.setState({ term: term });
    }

    render() {

        const { data, filter } = this.state;
        const visibleItems = this.filter(this.search(data, this.state.term), filter);
        const doneItems = data.filter(el => el.done === true);
        const doneCount = doneItems.length;
        const undoneItems = data.filter(el => el.done === false);
        const undoneCount = undoneItems.length;

        return (
            <div className="app">
                <AppHeader
                    undoneCount={undoneCount}
                    doneCount={doneCount} />
                <div className="search-panel">
                    <SearchPanel onSearchChange={this.onSearchChange} />
                    <ItemStatusFilter
                        onFilterChange={this.onFilterChange}
                        current={this.state.filter} />
                </div>
                <TodoList
                    data={visibleItems}
                    onDeleted={this.onDeleted}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant} />

                <AddItemPanel addItem={this.addItem} />
            </div>
        );
    }
}
