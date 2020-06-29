import React from 'react';
import ReactDOM from 'react-dom';
import { injectCustomJs, insertInit } from '../../util/inject';
import App from './App';
import './style.scss';

// init 阶段
// 注入 JS
injectCustomJs();

insertInit(() => {
    ReactDOM.render(<App />, document.querySelector('#aee-area-container'));
    console.log('| AEE | CS ready!');
});
