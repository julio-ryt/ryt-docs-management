import * as React from 'react'
import NxWelcome from './nx-welcome'
import { Link, Route, Routes } from 'react-router-dom'

const ExampleComponent = React.lazy(() => import('exampleComponent/Module'))

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/example-component">ExampleComponent</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/example-component" element={<ExampleComponent />} />
      </Routes>
    </React.Suspense>
  )
}

export default App
