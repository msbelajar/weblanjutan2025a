const Cardv2 = ({nama, usia, nim, prodi}) => {
  return (
    <div className="w-[300px] bg-amber-200 rounded-md p-3 m-2">
        <p>Nama : {nama}</p>
        <p>Usia : {usia}</p>
        <p>NIM : {nim}</p>
        <p>Prodi : {prodi}</p>
    </div>
  )
}

export default Cardv2