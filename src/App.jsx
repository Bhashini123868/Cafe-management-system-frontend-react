import { useState } from 'react'
import MyCafe from './Components/MyCafe/MyCafe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <h1 className='heading'>Helloo</h1>
   <MyCafe></MyCafe>
 
   </>
  )
}

export default App
