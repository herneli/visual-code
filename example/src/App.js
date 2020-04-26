import React from 'react'
import { ExampleComponent, HelloWorld } from 'visual-code'
import 'visual-code/dist/index.css'

const App = () => {
  return (
    <React.Fragment>
      <ExampleComponent text='Create React Library Example 😄' />
      <HelloWorld />
    </React.Fragment>
  )
}

export default App
