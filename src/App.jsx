import { useState,useCallback ,useEffect} from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numderAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState('')
  const passwordHandler = useCallback(() => {
    let pass = ""
    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(numderAllowed) charset += '0123456789'
    if(charAllowed) charset += '!@#$%^&*()_+'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * charset.length + 1)
      pass += charset.charAt(char)
      
    }
    setPassword(pass)
  } , [length,numderAllowed,charAllowed,setPassword])
  useEffect(() => {
    passwordHandler()
  }, [length,numderAllowed,charAllowed,passwordHandler])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-cyan-400'>
        <h1 className='text-3xl text-center font-bold'>Password Generator</h1>
        <div className='flex shadow-lg rounded-lg overflow-hidden mb-4 mt-5'>
          <input type='text' 
          value={password} 
          className='w-full px-4 py-2 outline-none' 
          placeholder='Your Password'
          readOnly />
        </div>
      <div className='flex shadow-lg rounded-lg overflow-hidden mb-4 mt-5'>
        <input type="range"
        min={8}
        max={50}
        value={length}
        onChange={(e) => setLength(e.target.value)}
        className=' px-4 py-2 outline-none'
        />
        <label>Length:{length} </label>
        <input type="checkbox"
        defaultChecked={numderAllowed}
        onChange={() => setNumberAllowed((prev)=>!prev)}
        className='ml-4'
        />
        <label>Numbers</label>
        <input type="checkbox"
        defaultChecked={charAllowed}
        onChange={() => setCharAllowed((prev)=>!prev)}
        className='ml-4'
        />
        <label>Character</label>
      </div>
      </div>
    </>
  )
}

export default App
