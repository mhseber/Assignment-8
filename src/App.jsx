import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>


      <Navbar cartCount={cartCount} />
      <Dashboard setCartCount={setCartCount} />
    </>
  )
}

export default App
