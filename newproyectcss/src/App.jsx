import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Componentcss } from './component/Componetcss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#ece469] border-[1px] rounded'>
      <div className='flex justify-center'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='border-[4px] text-[black] rounded-[4px] border-[#09ff00] py-1 px-3 bg-[yellow]' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>

      <h1 class="text-3xl font-bold underline text-[green]">
         Hello world!
      </h1>



    </div>
      <Componentcss/>
    </>
  )
}

export default App
