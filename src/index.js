/**
 * Created by sharpie on 31/05/17.
 */
// Create a new Component this component should produce some HTML

import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './components/appComponent';
require('bootstrap/dist/css/bootstrap.css');

const App = () => {
    return (
        <div>
           <AppComponent />
        </div>
    );
}

ReactDOM.render(<App /> , document.querySelector('.root'));
