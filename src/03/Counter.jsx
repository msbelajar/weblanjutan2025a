import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count+1)
    }

  return (
    <div className="w-[150px] bg-gray-300 flex flex-col justify-center items-center p-3 m-4 rounded-md">
        <h1 className="text-7xl font-bold">{count}</h1>
        <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-400 text-white mt-2 py-2 w-[100px] rounded-md">Click</button>
    </div>
  )
}
