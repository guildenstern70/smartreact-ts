/*
 * Copyright (c) Alessio Saltarin 2019-2021
 * Project SmartReact TS
 * MIT License - see LICENSE
 */

import React from 'react';
import './App.css';
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import AnotherPage from './pages/AnotherPage';
import store from './redux/Store';

const App: React.FC = () => {
    document.title = 'SmartReact';

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact component={LoginForm} />
                    <Route path="/home" component={Home} />
                    <Route path="/anotherpage" component={AnotherPage} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default App;
