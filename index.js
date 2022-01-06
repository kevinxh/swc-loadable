import React from 'react'
import ReactDOM from 'react-dom'
import loadable from '@loadable/component'

const LodableComponent = loadable(() => import('./lodableComponent'))

function App() {
  return (
    <div>
      <h1>hello world!</h1>
      <LodableComponent />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
