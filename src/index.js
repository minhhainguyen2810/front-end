import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'
import Todos from './components/Todos'
import App from './App'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware)
const composedEnhancers = compose(
  middlewareEnhancer,
  monitorReducerEnhancer
)

const store = createStore(rootReducer, undefined, composedEnhancers)
console.log(
  '%cLàm gì vậy, tính hách hệ thống người ta à',
  'color: pink; font-size: 50px;'
)

render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/todo" component={Todos} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
