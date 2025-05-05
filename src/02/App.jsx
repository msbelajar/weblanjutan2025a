import Card from "./components/Card"
import Cardv2 from "./components/Cardv2"

const App = () => {
  return (
    <div className="flex justify-center">
        <Card nama="Budi" usia={24} nim="H071231009" prodi="Sisfo"/>
        <Card nama="Susi" usia={23} nim="H081231010" prodi="Aktuaria"/>
        <Cardv2 nama="Iman" usia={21} nim="H011211010" prodi="Matematika"/>
    </div>
  )
}

export default App