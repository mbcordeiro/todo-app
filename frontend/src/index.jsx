import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import  reducers from './main/reducers.js'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(reducers)
ReactDOM.render(
    <Provider>
        <App />
    </Provider>
,document.getElementById('app'))