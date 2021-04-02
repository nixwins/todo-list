import React from 'react';

import './app-header.css';

const AppHeader = ()=>{
    return( 
            <div className="app-header">
                <h1>Todo list</h1>
                 <p className="statics">
                     <span className="statics-undone">1 more to do,</span>
                     <span className="statics-done">3 done</span>
                 </p>
            </div>
        );
};

export default AppHeader;