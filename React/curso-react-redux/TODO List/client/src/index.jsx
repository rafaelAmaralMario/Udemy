import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'
import reducers from "./main/reducers";
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise' 
import multi from 'redux-multi' 
import thunk from 'redux-thunk' 


const devTools = window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))