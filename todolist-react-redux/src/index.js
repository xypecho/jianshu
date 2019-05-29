import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import './index.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './store/index.js'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <Todolist />
    </Provider>,
    rootElement
)
