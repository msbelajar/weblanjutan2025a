import CardProduct from "./CardProduct";

const App = () => {

  const [products, setProducts] = useState([])

  function getProducts() {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
  }

  const categories = ["men's clothing", "women's clothing", "electronics", "jewelery"]
  return (
    <div>
      <div className="flex items-center justify-center h-[150px] bg-gradient-to-br from-blue-600 to-blue-300 mb-4">
        <h1 className="text-2xl sm:text-5xl">Selamat Datang di A-Shop</h1>
      </div>
      <div className="flex justify-center gap-2 mb-4">
        {categories.map((category) => (
          <button className="bg-gray-600 px-2 py-2 rounded-xl text-white">{category}</button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </div>
      <div className="flex items-center justify-center h-[50px] bg-gradient-to-tl from-blue-600 to-blue-300 my-2">
        <h1 className="text-md">@2025</h1>
      </div>
    </div>
  );
};

export default App;
