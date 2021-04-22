import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {

        let q = e.target.value;
        // console.log(q)

        this.setState({ term: q });
        this.props.onSearchChange(q)
    }

    render() {

        return <input onChange={this.onSearchChange} placeholder="Type here for search item" />
    }
}

