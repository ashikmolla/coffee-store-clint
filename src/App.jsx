
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Component/Header'

function App() {

  return (
    <div>
      <Header />
      <Outlet />

      <h1>Footer section</h1>

    </div>
  )
}

export default App
