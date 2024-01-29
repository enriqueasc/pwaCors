import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>CORS</h1>
      <div className="card">
        <button onClick={() => {
              setCount((count) => count + 1);

              fetch('http://localhost:3000/dos', {
                  method: 'delete'
                })
                .then(response => response.text())
                .then(data => { console.log(data)})
                .catch(err => console.log(err))
              
              }}>
          contador de peticiones {count}
        </button>
        
      </div>
      <p className="read-the-docs">
        Equipo Enrique
      </p>
    </>
  )
}

export default App
