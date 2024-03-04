function En  () {

  const enLevel = 'asdfghjkl'
  const enLevelUpper = enLevel.toUpperCase()
  const en = enLevel + enLevelUpper



  function getRandomNumber(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
  }


  return (
    // <div className="Item">{rusLevel1()}</div> // без буквы - ё
    <div className="Item">{en[getRandomNumber(0, 8)]}</div>
  )

}

export default En