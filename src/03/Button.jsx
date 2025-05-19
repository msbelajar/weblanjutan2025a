export default function Button({onclick, color = "lime"}) {

    const colorClasses = {
    lime: "bg-lime-400",
    blue: "bg-blue-400",
    red: "bg-red-400",
    // add more colors as needed
    }

  const buttonstyle= `${colorClasses[color]} text-white py-2 w-[100px] rounded-md mx-2`
    
  return (
    <button onClick={onclick} className={buttonstyle} >
      Click
    </button>
  );
}
