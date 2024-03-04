import EventKeyboard from './Events/EventKeyboard'
import GameProcess from './Events/GameProcess'


export default function StartGame(){ 
  
  const start = document.querySelector('.start')
  const field  = document.querySelector('.field')
  let checked = document.querySelector('input[name="level"]:checked').value

  start.style.display = 'none'
  field.style.display = 'inline-block'

 

  function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

    // добавить кнопку начать заного


  if(checked === 'easy'){
    const rus1 = 'фывапролджэ'
    const rusLevelUpper = rus1.toUpperCase()
    const rus = rus1 + rusLevelUpper
    const rusLenght = rus1.length - 1

    field.innerHTML =
      `<div class="Block">
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Zefir"></div>
        <div class="Enemy"></div>
        <div class="exit"></div>
      </div> 
      `

      GameProcess()
      EventKeyboard()

  }

  else if(checked === 'medium'){
    const rus1 = 'фывапролджэячсмитьбю'
    const rusLevelUpper = rus1.toUpperCase()
    const rus = rus1 + rusLevelUpper
    const rusLenght = rus1.length - 1
    
    field.innerHTML =
      `<div class="Block">
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Zefir"></div>
        <div class="Enemy"></div>
        <div class="exit"></div>
      </div> 
      `

      GameProcess()
      EventKeyboard()
  }

  else if(checked === 'pro'){
    const rus1 = 'йцукенгшщзхъфывапролджэячсмитьбю'
    const rusLevelUpper = rus1.toUpperCase()
    const rus = rus1 + rusLevelUpper
    const rusLenght = rus1.length - 1

    field.innerHTML =
      `<div class="Block">
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Item">${rus[getRandomNumber(0, rusLenght)]}</div>
        <div class="Zefir"></div>
        <div class="Enemy"></div>
        <div class="exit"></div>
      </div> 
      `
      // <div class="checkLanguage"></div>

      GameProcess()
      EventKeyboard()

  }



}



