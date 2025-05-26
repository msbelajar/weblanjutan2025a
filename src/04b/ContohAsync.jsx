export default function ContohAsync() {
    
    function handleClick() {
        console.log('Haloo')
        console.log('Makassar')
        setTimeout( () => console.log("Wait"), 2000)
        console.log('Unhas')
    }    

  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
