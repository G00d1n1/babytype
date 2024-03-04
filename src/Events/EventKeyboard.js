
function EventKeyboard(){

  let firstItem = document.querySelectorAll('.Item')[0].innerHTML

  let allItems = document.querySelectorAll('.itemLevel')
  let arrItems = Array.from(allItems)
  
  for(let one of arrItems){
    one.style.background = 'lightgray'
  }
  for(let one of arrItems){
    if(firstItem === one.innerHTML){
      one.style.background = 'red'
    }
  }
  


  const lightKeyboard = () => {
    let arrLetters = document.querySelectorAll('.Item')
    if(arrLetters.length > 0){
      let firstLetter = arrLetters[0].innerHTML

      for(let one of arrItems){
        one.style.fontSize = 'inherit'
        one.style.background = 'lightgray'

        if(firstLetter === one.innerHTML){
          one.style.background = 'red'
          one.style.fontSize = '20px'
        }
      }
    }
    else{document.removeEventListener('keypress', lightKeyboard)}
  }
  document.addEventListener('keypress', lightKeyboard)


}


export default EventKeyboard