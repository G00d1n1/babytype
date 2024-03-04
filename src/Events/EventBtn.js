import StartGame from "../StartGame"

function EventBtn(){

  activityBtn()

  function activityBtn(){
    let button = document.querySelector('.btnStart')
    button.removeAttribute('disabled')
    btnStartGame ()
  }
  
  function btnStartGame (){
    let btn = document.querySelector('.btnStart')
    btn.addEventListener('click', StartGame)
  }

  


}


export default EventBtn