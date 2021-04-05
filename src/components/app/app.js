import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import AddItemPanel from '../add-item-panel';

import './app.css';



export default class App  extends Component{

    idx = 10000;

    state ={ 
            data:[
                {id:1, label:"Do something", important:false, done:false}, 
                {id:2, label:"Make me happy", important:false, done:false}
            ]
    };

    onDeleted = (id)=>{
        this.setState((state)=>{
            const idx = this.state.data.findIndex(el=>el.id === id )
            return {
                data:[  
                        ...state.data.slice(0, idx), 
                        ...state.data.slice(idx+1)
                    ]
            }
        });
    }

    addItem = (text)=>{
    
        this.setState((state)=>{
            const item = {id:this.idx++, label:text, important:false};
            const {data} = this.state;
            const newData = [...data, item];
    
            return {data:newData} 
        });
    }

    onToggleImportant = (id)=>{

        this.setState((state)=>{

            const {data} = state;

            const idx = data.findIndex((el)=> el.id === id);

            const beforeArr = data.slice(0, idx);
            const [newElement] = data.slice(idx, idx+1);
            const afterArr = data.slice(idx);

            newElement.important = !newElement.important;

            return [...beforeArr, newElement, ...afterArr];
            
        });
    }

    onToggleDone = (id)=>{
        console.log(id)

        this.setState((state)=>{

            const {data} = state;
            const idx = data.findIndex((el)=>el.id === id);
            
            const beforArr = data.slice(0, idx+1);
            const oldItem = data.slice(idx, idx+1);
        
            const [newItem] = oldItem;
            console.log(newItem)
            newItem.done = !newItem.done;
            
            const afterArr = data.slice(idx);

            return [...beforArr, newItem, ...afterArr];
        });
    }

    render(){

        const {data} = this.state;
        return (
            <div className="app">
                <AppHeader undoneCount={3} doneCount={0} />
                <SearchPanel/>
                <TodoList 
                        data={data}
                        onDeleted={ this.onDeleted } 
                        onToggleDone={ this.onToggleDone }
                        onToggleImportant={ this.onToggleImportant} />
                <AddItemPanel addItem={ this.addItem }/>
            </div>
          
        );
    }  
}
