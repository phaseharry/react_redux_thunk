import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import ConnectedMain from './components/Main'
import store from './store';

ReactDOM.render(
<Provider store={store}>
    <Router>
        <ConnectedMain/>
    </Router>
</Provider>,
 document.getElementById('app'))