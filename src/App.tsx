import { useState } from 'react'
import './App.css'
import DynamicInput from './DynamicInput'

function App() {
  // const [count, setCount] = useState(0)
  const [contents, setContents] = useState<string[]>([]);

  return (
    <>
      <DynamicInput  
      contents={contents} 
      onAdd={(item) => setContents([...contents, item])}
      onDelete={(item) => setContents(contents.filter(itm => itm !== item))}
      />
    </>
  )
}

export default App;
