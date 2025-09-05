import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState("Loding...")

  useEffect(() => {
    axios.get("http://localhost:5000/api/message")
    .then(response => {
      setMessage(response.data.message)
    })
    .catch(() => {
      setMessage("unable to fetch data")
    })
  }, [])

  return (
    <div>
      <h1>react -- express</h1> 
      <p>{message}</p>   
    </div>
  )
}

export default App
