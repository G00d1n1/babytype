
function Level3 (props) {
  // console.log(quq)
  let quq = props.name
  // if(quq === 3) { console.log(quq)}

  let zu = 0
  
  function name() {

    if(quq === 1){
       zu = 1
    } 
    if(quq === 3){
       zu = 3
    } 
    
  }
    
  console.log(zu)

  return (
    <>
    <div className="Block">
      <div className="Item">{name()}</div>
      <div className="Item">{zu}</div>
      <div className="Item">{zu}</div>
    </div>
    </>
  )
}

export default Level3
