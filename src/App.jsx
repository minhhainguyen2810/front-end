import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import './App.css'

function App() {
  const [spin, setSpin] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setSpin(!spin)
    }, 6000)
  })
  return (
    <div className="container">
      <h1>This page is under construction ...</h1>
      <img className={classNames('App-logo', { spin })} src="images/Image from iOS.png" alt="Minh" />
    </div>
  )
}

export default App
