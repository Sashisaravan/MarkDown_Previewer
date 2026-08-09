import { useState } from 'react'
import  PreviewConfig from './components/PreviewerConfig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PreviewConfig />
    </>
  )
}

export default App
