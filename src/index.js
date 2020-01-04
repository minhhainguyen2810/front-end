import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Todos from './components/Todos'
import App from './App'
import configureStore from './configureStore'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = configureStore()
process.env.NODE_ENV === 'production' &&
  console.log('%cLàm gì vậy, tính hách hệ thống người ta à', 'color: pink; font-size: 50px;')

render(
  <Provider store={store}>
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/todo" component={Todos} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
