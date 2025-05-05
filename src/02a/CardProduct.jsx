const CardProduct = ({ title, price, description, image }) => {
  return (
    <div className="w-[300px] bg-green-300 p-3 rounded-md">
      <div className="transition-all duration-1000 ease-in-out hover:scale-125">
        <img className="rounded-md" src={image} />
      </div>
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="line-clamp-3">{description}</p>
      <h1>$ {price}</h1>
    </div>
  );
};

export default CardProduct;
