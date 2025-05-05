import { products } from "./products";
import CardProduct from "./CardProduct";

const App = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-[150px] bg-gradient-to-br from-blue-600 to-blue-300 mb-4">
        <h1 className="text-5xl">Selamat Datang</h1>
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
