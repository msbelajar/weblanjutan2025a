const CardProduct = ({title, price, description, image}) => {
  return (
    <div className="w-[300px] bg-green-300 p-3">
        <img src={image} />
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
        <h1>$ {price}</h1>
    </div>
  )
}

export default CardProduct