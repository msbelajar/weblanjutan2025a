const Card = (props) => {
  return (
    <div className="w-[300px] bg-amber-200 rounded-md p-3 m-2">
        <p>Nama : {props.nama}</p>
        <p>Usia : {props.usia}</p>
        <p>NIM : {props.nim}</p>
        <p>Prodi : {props.prodi}</p>
    </div>
  )
}

export default Card