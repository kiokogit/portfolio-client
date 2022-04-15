import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reducers from './reducers/combined_reducers'

//state management
import { createStore, compose, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={store} >
        <App />
    </Provider>
)

