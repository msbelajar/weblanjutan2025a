import { useState } from "react";
import Button from "./Button";

export default function Contoh04() {
  const [counter, setCounter] = useState(0)

  function handleClick() {
    setCounter(counter+1)
  }

  return (
    <div className="w-[90%] mx-auto mt-4">      
      <h1 className="text-8xl font-bold">{counter}</h1>
      <Button onclick={handleClick} />
      <Button onclick={handleClick} />
    </div>
  );
}
