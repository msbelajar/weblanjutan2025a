import React, { useEffect, useState } from 'react'   

export default function App() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => setCounter( n => n + 1), 1000)
        return () => clearInterval(timer)
    },[counter])
  
    return (
    <div className='flex justify-center'>
        <p className='text-9xl font-bold'>{counter}</p>
    </div>
  )
}
