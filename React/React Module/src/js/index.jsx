import React from 'react';
import ReactDOM from 'react-dom';
import {combineReducers, createStore} from 'redux'
import {Provider} from 'react-redux'
import CounterReducer from './counterReducer'
import Counter from './counter'


const reducers = combineReducers({
    counter : CounterReducer
})

ReactDOM.render( 
<Provider store={createStore(reducers)}>
    <Counter></Counter>
</Provider>
, document.getElementById('app'));

