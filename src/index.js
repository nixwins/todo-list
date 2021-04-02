import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header/app-header';
import SearchPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';

import IndexCSS  from './index.css';

const App = ()=>{

    const data = [
        {id:1, label:"Do something", important:true}, 
        {id:2, label:"Make me happy", important:false}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <SearchPanel/>
            <TodoList data={data}/>
        </div>
      
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));