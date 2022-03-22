import React from 'react'
import ReactDOM from 'react-dom'
import Info from './Info'
import About from './About'
import Interest from './Interest'

ReactDOM.render(
    <div className="container">
        <Info/>
        <About/>
        <Interest/>
    </div>
    ,document.querySelector('#root')
)