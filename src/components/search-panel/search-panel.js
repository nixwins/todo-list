import React from 'react';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './search-panel.css';
const SearchPanel = function (){
    // function handleChange (event){
    //     this.setState({value:event.target.value});
    // }
    return(
        <div className="search-panel">
            <input placeholder="Type here for search item" />
            <ItemStatusFilter/>
        </div>
    );
    
};

export default SearchPanel;