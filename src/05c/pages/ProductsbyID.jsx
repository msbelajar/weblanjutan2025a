import { useParams } from "react-router"

export default function ProductsbyID() {
    const {id} = useParams()
  return (
    <div>ProductsbyID {id}</div>
  )
}
