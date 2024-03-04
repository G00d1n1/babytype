function Rus  () {

  const rus1 = 'фывапролджэ'
  const rusLevelUpper = rus1.toUpperCase()
  const rus = rus1 + rusLevelUpper




  function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  // функция должна определять количество (max) элементов и в зависимости от этого генерировать буквы на поле



  return (
    // <div className="Item">{rusLevel1()}</div> // без буквы - ё
    <div className="Item">{rus[getRandomNumber(0, 10)]}</div>
  )

}

export default Rus