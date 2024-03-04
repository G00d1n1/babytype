import { useState, useEffect } from "react";
import Block from "./Block";

export default function Counter(){
  // const[count, setCount] = useState(11)

  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
    Block()
    console.log(count)
  });

  return(
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>


    // <div>
    //   <h1>Значение счетчика: {count}</h1>

    //   <button onClick={() => setCount(count => count + 1)}>Кнопка</button>
    //   <button onClick={() => setCount(count => count - 1)}>Убавить</button>
    // </div>
  )
}

