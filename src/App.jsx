import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { ButtonApi } from './components/ButtonApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Button /> */}
     <ButtonApi users= 'datos de usuarios'/>
    </>
  )
}

export default App
