import './css/keyboard.css';


export default function Keyboard(props){


  // let animal = {
  //   eats: true,
  //   walk() {
  //     /* этот метод не будет использоваться в rabbit */
  //   }
  // };
  
  // let rabbit = {
  //   __proto__: animal
  // };
  
  // rabbit.walk = function() {
  //   alert("Rabbit! Bounce-bounce!");
  // };
  
  // // rabbit.walk(); // Rabbit! Bounce-bounce!

            // map
  // let obj = {}
  // let iArr = [0,1,2,3,4,5,6,7,8,9]
  // let ten = [[],[],[],[],[],[],[],[],[],[]]
  // let itemsById = iArr.map((key,index) => (key, ten[index]))
  // let object = Object.fromEntries(itemsById)
            // reduce
  // const arr = ['0','1','2','3','4','5','6','7','8','9'];
  // const res = arr.reduce((acc,curr)=> (acc[curr]=[],acc),{});
  // console.log(res)
            // for
  // let obj = {}
  // for(let i =0; i<iArr.length; i++){
  //   obj[i] = []
  // }
  // console.log(obj)
  // console.log(itemsById)


  return (
    <div className="main">
      {/* {props.data.map(item => 
        <div key={item.id}>
          <span key={item.name}>{item.name}</span>
          <span key={item.age}>{item.age}</span>
        </div>
      )} */}

      <div className="keyboard">
        <div className="keyboard_line">
          <div className="line-item">`</div>
          <div className="line-item">1</div>
          <div className="line-item">2</div>
          <div className="line-item">3</div>
          <div className="line-item">4</div>
          <div className="line-item">5</div>
          <div className="line-item">6</div>
          <div className="line-item">7</div>
          <div className="line-item">8</div>
          <div className="line-item">9</div>
          <div className="line-item">0</div>
          <div className="line-item">-</div>
          <div className="line-item">=</div>
          <div className="line-item  line-itemTech">Backspace</div>
        </div>
        
        <div className="keyboard_line">
          <div className="line-item  line-itemTech">Tab</div>
          <div className="line-item  itemLevel">й</div>
          <div className="line-item  itemLevel">ц</div>
          <div className="line-item  itemLevel">у</div>
          <div className="line-item  itemLevel">к</div>
          <div className="line-item  itemLevel">е</div>
          <div className="line-item  itemLevel">н</div>
          <div className="line-item  itemLevel">г</div>
          <div className="line-item  itemLevel">ш</div>
          <div className="line-item  itemLevel">щ</div>
          <div className="line-item  itemLevel">з</div>
          <div className="line-item  itemLevel">х</div>
          <div className="line-item  itemLevel">ъ</div>
          <div className="line-item">\</div>
        </div>

        <div className="keyboard_line">
          <div className="line-item  line-itemTech">Caps Lock</div>
          <div className="line-item  itemLevel  activeAqua">ф</div>
          <div className="line-item  itemLevel  activeAqua">ы</div>
          <div className="line-item  itemLevel  activeAqua">в</div>
          <div className="line-item  itemLevel  activeAqua">а</div>
          <div className="line-item  itemLevel">п</div>
          <div className="line-item  itemLevel">р</div>
          <div className="line-item  itemLevel  activeAqua">о</div>
          <div className="line-item  itemLevel  activeAqua">л</div>
          <div className="line-item  itemLevel  activeAqua">д</div>
          <div className="line-item  itemLevel  activeAqua">ж</div>
          <div className="line-item  itemLevel">э</div>
          <div className="line-item  line-itemTech">Enter</div>
        </div>

        <div className="keyboard_line">
          <div className="line-item  line-itemTech">Shift</div>
          <div className="line-item  itemLevel">я</div>
          <div className="line-item  itemLevel">ч</div>
          <div className="line-item  itemLevel">с</div>
          <div className="line-item  itemLevel">м</div>
          <div className="line-item  itemLevel">и</div>
          <div className="line-item  itemLevel">т</div>
          <div className="line-item  itemLevel">ь</div>
          <div className="line-item  itemLevel">б</div>
          <div className="line-item  itemLevel">ю</div>
          <div className="line-item">.</div>
          <div className="line-item  line-itemTech">Shift</div>
        </div>

        <div className="keyboard_line">
          <div className="line-item  line-itemTech">Ctrl</div>
          <div className="line-item">FN</div>
          <div className="line-item  line-itemTech">Alt</div>
          <div className="line-item  line-space   itemLevel  activeAqua">Space</div>
          <div className="line-item  line-itemTech">Alt</div>
          <div className="line-item">FN</div>
          <div className="line-item">FN</div>
          <div className="line-item  line-itemTech">Ctrl</div>
        </div>
      </div>
    </div>
  )

  

}