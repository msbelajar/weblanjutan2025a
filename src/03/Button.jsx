export default function Button({onclick}) {
    
  return (
    <button onClick={onclick} className="bg-blue-400 text-white py-2 w-[100px] rounded-md mx-2" >
      Click
    </button>
  );
}
