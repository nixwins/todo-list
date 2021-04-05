import React from 'react';
import './add-item-panel.css';


export default class AddItemPanel extends React.Component{

    state = {
        label:''
    }
    
    onSubmit = (e)=>{
        e.preventDefault();
 
        const {addItem} = this.props;
        addItem(this.state.label);
        
    }

    onLabelChange = (e)=>{
        this.setState({label:e.target.value});
    }

    render(){
        
        return(
            <form className="add-item-panel" onSubmit={ this.onSubmit }>
                <input 
                        type="text" 
                        placeholder="Type here to add item"
                        onChange={ this.onLabelChange }/>
                <button 
                        className="btn btn-outline-secondary"
                        >
                            Add
                </button>
            </form>
        );
    }
}