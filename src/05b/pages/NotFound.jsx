import { useNavigate } from "react-router"

export default function NotFound() {
    const navigate = useNavigate()
    setTimeout( () => navigate("/"), 1500) //kembali ke route root "/"
    //setTimeout( () => navigate(-1), 1500) //kembali ke route yang sebelumnya diakses

  return (
    <div className="flex justify-center text-7xl mt-4">404 - Not Found</div>
  )
}
