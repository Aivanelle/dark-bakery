import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Nora - Dark Bakery</h1>
      <div className='p-4'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>1
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
