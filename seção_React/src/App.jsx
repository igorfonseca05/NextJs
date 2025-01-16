import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [resul, setResul] = useState('Montou')

  useState(() => {

    return () => console.log('desmontou')

  }, [])

  return (
    <>
      <h1>Bem vindo</h1>
      <h2>{resul}</h2>
    </>
  )
}

export default App
