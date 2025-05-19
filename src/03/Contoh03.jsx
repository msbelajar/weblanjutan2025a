import { useState } from "react"

export default function Contoh03() {
    const [count, setCount] = useState(0)

    function handleClick() {
        if (count < 2) {
            setCount(count+1)
        } else {
            setCount(1000) //render berhenti
        }
    }

    console.log('re-render')

  return (
    <div className="w-[90%] mx-auto mt-4">
        <h1 className="text-3xl font-bold">{count}</h1>
        <button onClick={handleClick} className="bg-blue-500 text-white py-2 w-[100px] rounded-md">Click</button>
    </div>
  )
}
