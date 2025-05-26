import { useState } from "react"

export default function App() {
    const [user, setUser] = useState({name:'', password:''})

    console.log('re-render')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(user.name, user.password)
    }

  return (
    <div className="m-4">
        <form onSubmit={handleSubmit} className="flex flex-col w-[300px] gap-2">
            <input onChange={(e) => setUser({...user, name:e.target.value})} className="border-1 rounded-md p-2" type="text" placeholder="Username" required></input>
            <input onChange={(e) => setUser({...user, password:e.target.value})} className="border-1 rounded-md p-2" type="text" placeholder="Password" required></input>
            <button type="submit" className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-md">Login</button>
        </form>
    </div>
  )
}
