import React from 'react'
import ReactDOM from 'react-dom'
import loadable from '@loadable/component'

const LoadableComponent = loadable(() => import('./loadableComponent'))

function App() {
  return (
    <div>
      <h1>hello world!</h1>
      <LoadableComponent />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
