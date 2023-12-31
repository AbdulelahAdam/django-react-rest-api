import { Fragment, useState } from 'react'

import './App.css'

const reactLogoPath = `/static/react.svg`
const viteLogoPath = `/static/vite.svg`


function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <h1>Vite + React + Django</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Fragment>
  )
}

export default App
