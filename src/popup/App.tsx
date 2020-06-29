import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';

import RouteComponent from './router';

import store from './store';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Provider store={store}>
                <RouteComponent />
            </Provider>
        </div>
    );
};

export default hot(App);
