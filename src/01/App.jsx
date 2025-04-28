import Button from "./components/Button";
import List from "./components/List";
import TextArea from "./components/TextArea";

export default function App() {
  console.log("Haloo");
  const nama = "Budi";
  return (
    <> 
      <Halo />
      <h1>Web Lanjutan {nama}</h1>
      <h2 className="c1">Web Lanjutan {`nama ${nama}`}</h2>
      <h3 style={{ backgroundColor: "red" }} >Web Lanjutan 2025</h3>
      <List />
      <TextArea />
      {/* <Button /> */}
      <button className="bg-amber-400 text-white cursor-pointer">Click</button>
    </>
  );
}

function Halo() {
  return <h1>Haloo</h1>;
}