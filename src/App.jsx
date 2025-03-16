import { useState } from 'react'
import HeaderContent from './Components/HeaderContent/HeaderContent'
import BodyContent from './Components/BodyContent/BodyContent'
import FooterContent from './Components/FooterContent/FooterContent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='wrapper'>
    <HeaderContent/>
    <BodyContent/>
    <FooterContent/>
    </div>
   </>
  )
}

export default App
