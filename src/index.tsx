import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"

import './index.css'
import App from './App'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './store/reducers'
import rootSaga from './store/sagas'

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  rootReducer, 
  composeEnhancers(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)

createRoot(document.getElementById('root') as HTMLElement ).render(
  <Provider store = { store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
