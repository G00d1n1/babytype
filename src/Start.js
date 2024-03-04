import EventBtn from './Events/EventBtn'

export default function Start () {
  // // document.querySelectorAll('input[type="radio"][name="level"]').forEach(radio => {
  // //   radio.addEventListener('change', () => console.log(radio.value));
  // // });

  function Rules(){
    const rules = document.querySelector('.rules')
    rules.style.display = 'flex'

    rules.innerHTML = `
    <div >
      <div class="close">X</div>
      <span>Об игре</span> 
      Данное приложение - клавиатурный тренажер, позволит вам освоить "метод слепой печати", технику десятипальцевой печати на клавиатуре, в игровой форме. Что позволит вам ускорить скорость печати до 100 и более символов в минуту.
      
      <p>На ваш выбор 3 уровня сложности:</p> 
      <b>Новичок</b> - средний ряд букв <br>
      <b>Бывалый</b>  - средний + нижний ряды <br>
      <b>Профи</b>  - все три ряда букв клавиатуры
      
      <span>Правила</span> 
      - На экране появляется определенное количество символов которые отделяют вашего персонажа от выхода. <br>
      - Чтобы освободить проход, необходимо поочередно нажимать символы, находящиеся в желтом квадрате  <br>
      - Успейте вовремя и не дайте злой птице добраться до вашего персонажа. <br>

      <span>Перед началом игры</span> 
      - Убедитесь что включена верная раскладка клавиатуры! <br>
      - Расположите ваши пальцы на клавиши указанные на клавиатуре.


    </div>
    `
    EventRules()
  }
  function EventRules(){
    document.querySelector('.close').addEventListener('click',() =>{
      const rules = document.querySelector('.rules')
      rules.style.display = 'none'
    })
  }

  

  return (
    <form name="start" className='start' onChange={EventBtn}>
      <h2>Главное меню</h2>

      <h4>Выберите уровень сложности</h4>

      <div className='inputGroup'>

        <input type="radio" name="level" id='easy' value='easy' />
        <label htmlFor="easy">Новичок</label>

        <input type="radio" name="level" id='medium' value='medium'/>
        <label htmlFor="medium">Бывалый</label>

        <input type="radio" name="level" id='pro' value='pro'  />
        <label htmlFor="pro">Профи</label>
      </div>


      <button className="btn btnStart" type="button" disabled >Начать игру</button>
      <button className="btn btnOptions" type="button" onClick={Rules}>Правила</button>
      <div className="rules"></div>

    </form>

  )
}

