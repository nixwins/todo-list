import React from 'react';

import './app-header.css';

const AppHeader = ({undoneCount, doneCount})=>{

    return( 
            <div className="app-header">
                <h1>Todo list</h1>
                 <p className="statics">
                     <span className="statics-undone"> { undoneCount } more to do,</span>
                     <span className="statics-done"> { doneCount } done</span>
                 </p>
            </div>
        );
};

export default AppHeader;