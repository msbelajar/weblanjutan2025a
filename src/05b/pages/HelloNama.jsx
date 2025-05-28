import { useParams } from "react-router"

export default function HelloNama() {
    const {nama} = useParams()
  return (
    <div className="flex justify-center text-7xl">{nama}</div>
  )
}
