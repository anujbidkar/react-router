import React from 'react'
import { Route,Link,Switch,BrowserRouter  } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/registerss">Register</Link>
    </div>
  )
}
