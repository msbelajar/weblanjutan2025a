const CardProduct = ({ id, title, price, image }) => {
  return (
    <div className="flex flex-col justify-center w-[300px] bg-gradient-to-br from-amber-300 to-amber-200  p-3 rounded-md">
      <img
        className="w-full h-[300px] transition-all duration-700 ease-in-out hover:scale-110 object-scale-down rounded-md"
        src={image}
      />
      <h1 className="font-bold text-xl">{title}</h1>
      <div className="flex justify-between items-center mt-2">
        <h1 className="text-2xl font-bold">$ {price}</h1>
        <a href={"/product/"+id} target="_blank">
          <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
            Detail
          </button>
        </a>
      </div>
    </div>
  );
};

export default CardProduct;
