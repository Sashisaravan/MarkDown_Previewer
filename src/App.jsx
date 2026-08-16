import { useState } from 'react'
import  PreviewConfig from './components/PreviewerConfig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PreviewConfig />
         <footer className="footer">
        Developed by <strong>Sashi Saravan</strong>
      </footer>
    </>
  )
}

export default App
