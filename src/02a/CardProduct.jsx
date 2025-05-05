const CardProduct = ({ title, price, description, image }) => {
  return (
    <div className="flex flex-col justify-center w-[300px] bg-amber-200 p-3 rounded-md">
      <img
        className="w-full h-[300px] transition-all duration-700 ease-in-out hover:scale-110 object-scale-down rounded-md"
        src={image}
      />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="line-clamp-3">{description}</p>
      <h1 className="text-md font-bold">$ {price}</h1>
    </div>
  );
};

export default CardProduct;
