import Card from "./components/Card"
import Cardv2 from "./components/Cardv2"

const App = () => {
    const datamhs = {nama: "Hanif", usia : 17, nim : "H071251010", prodi: "Sisfo"}
    const ilham = {nama: "Ilham", usia : 20, nim : "H081251019", prodi: "Aktuaria"}
  return (
    <div className="flex justify-center">
        <Card nama="Budi" usia={24} nim="H071231009" prodi="Sisfo"/>
        <Card nama="Susi" usia={23} nim="H081231010" prodi="Aktuaria"/>
        <Cardv2 nama="Iman" usia={21} nim="H011211010" prodi="Matematika"/>
        <Cardv2 nama="Fajar" nim="H011211013" prodi="Matematika"/>
        <Cardv2 nama={datamhs.nama} nim={datamhs.nim} usia={datamhs.usia} prodi={datamhs.prodi} />
        <Cardv2 {...ilham}/> 
    </div>
  )
}

export default App