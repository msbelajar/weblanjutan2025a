import { products } from "./products"
import CardProduct from "./CardProduct"

const App = () => {
  return (
    <div className="flex flex-wrap justify-between gap-2">
        {products.map( (product) => (
            <CardProduct {...product} />
        ))}
    </div>
  )
}

export default App