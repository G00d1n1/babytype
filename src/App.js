import Keyboard from './Keyboard.js';
import Start from './Start.js'
import data from './data.json'


function App() {
  // const [level, setLevel] = useState(0) // 1ый уровень вложенности
  // let responseName = data.map(item => item.name)
  // let responseAge = data.map(item => item.age)

  return (
    <div className="App">

      <Start />

      <div className="field">
      </div>

      <Keyboard />
      {/* <Keyboard data={data} name={responseName} age={responseAge}/> */}

    </div>
  );
  
 
}


 
export default App;

// //  правила - не дайте смайлику упасть с обрыва
// //  проверка какая раскладка клавиатуры используется
// //  выбор языка (русский, английский)
// //  выбор уровень сложности (определяется рядами, один, два, три)

/*
Падение смайлика, если нет подпорки
1 физические объекты
  -- линия ограничитель
  -- кубики-буквы
  -- игровой объект
2 физика объектам
  -- линия уменьшается по оси Х
  -- все фигуры движутся вниз по оси У
  -- эффект падения если нет ограничения
3 отслеживание событий
  -- кубики-буквы - образуются в случайном порядке
  -- отслеживание клика по клавиатуре
  -- отслеживание значение левого кубика
  -- сравнение значений, если сопрадает, то левый кубик исчезает, если не совпадает, то линия ускоряется

*/