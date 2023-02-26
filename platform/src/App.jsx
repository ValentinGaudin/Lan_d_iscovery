import { useState } from 'react'
import Nav from './components/Nav.jsx'

function App() {

  return (
    <div className="App dark bg-red-600">
      <Nav />
      <div className="min-h-full bg-white dark:bg-black">
        <h1 className="text-black dark:text-white ">
          Hello World
        </h1>
      </div>
    </div>
  )
}

export default App
