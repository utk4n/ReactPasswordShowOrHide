import Input from './Input'
import { useState } from 'react'
import './App.css'
function App() {

  const [password, setPassword] = useState('')


  return (
    <div className="App">
      <Input type="password" value={password} onChange={e => setPassword(e.target.value)} label="Password" />
    </div>
  )
}

export default App
