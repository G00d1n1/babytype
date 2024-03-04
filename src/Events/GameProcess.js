
 function GameProcess(){

      // анимация врага
  const intervalId = setInterval(() => {
    let zef = document.querySelector('.Zefir').getBoundingClientRect().left + 35
    let field  = document.querySelector('.field')
    
    let enemyPos = document.querySelector('.Enemy').getBoundingClientRect().left
    
    if(zef >= enemyPos){
      let app = document.querySelector('.App')
      let fail = document.createElement('div')
      fail.className = 'fail'
      
      clearInterval(intervalId)
     
      field = document.querySelector('.field')
      field.remove()

      fail.innerHTML= `<h2>Увы. Вы проиграли!</h2> `
      app.appendChild(fail)
    }
  }, 100)
  

          // процесс игры
  let counter = 0
  const inputLetters = (event) =>{
    let letterOnClick = event.key
    let field  = document.querySelector('.field')
    let arr = document.querySelectorAll('.Item')
    const main = document.querySelector('.main')

    checkLanguage (letterOnClick)
  
    if(arr.length > 0){
      let fieldLetter = arr[0].innerText
      
      if(letterOnClick.toLocaleLowerCase() === fieldLetter){
        let arr = document.querySelectorAll('.Item')
        arr[0].remove()

            // эффекты
        let arrItem = document.querySelectorAll('.itemLevel')
        for(let i=0;i<arrItem.length;i++){
          if(arrItem[i].innerHTML === letterOnClick){

            arrItem[i].style.color = 'green'
            arrItem[i].classList.add('redialEffect')
            setTimeout(() => arrItem[i].classList.remove('redialEffect'),1000)}
            // кнопка - в главное меню
          // }
        }


              // условие победы
        if (arr.length < 2){
          let app = document.querySelector('.App')
          let victory = document.createElement('div')
          // field = document.querySelector('.field')

          setTimeout(() => {
            victory.className = 'victory'
            victory.innerHTML= `<h2>Поздравляю!</p><p>Уровень пройден!</p><p>Ошибок в тесте - ${counter}</h2> `
            app.appendChild(victory)
            
            field.remove()
            main.style.display = 'none'
    
            clearInterval(intervalId)
          }, 700);
          
        }
      }
      else {
        (function(){counter += 1})()    // вызов анонимной функции
      }
    }
    else{
      document.removeEventListener('keypress', inputLetters)
    }
  }

  document.addEventListener('keypress', inputLetters)
    

        // проверка раскладки клавиатуры
  function checkLanguage (letterOnClick){
    const enLower = `abcdefghijklmnopqrstuvwxyzх[]{};':"?/>.<,`
    const enUpper = enLower.toUpperCase()
    const en = enLower + enUpper
    const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    const rusUpper = rusLower.toUpperCase()
    const rus = rusLower + rusUpper
    const main = document.querySelector('.main')
    let lang = document.createElement('div')
    lang.className = 'lang'
    let checkLang = main.querySelector('.lang')

    for(let i=0; i<en.length; i++){
      if(letterOnClick === en.charAt(i)){
        if(!checkLang) {
          main.appendChild(lang)
          lang.innerHTML = `<h2>Неверная раскладка клавиатуры</h2>`
        }
      }
      else if(letterOnClick === rus.charAt(i)){
        if(checkLang) {
          let checkLang = main.querySelector('.lang')
          checkLang.remove()
        }
      }
    }
  }
}

export default  GameProcess