import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import wallpapers from '../utils/wallpapers.json'

const ButtonPhrase = ({setPhraseRandom, setWallpaperRandom}) => {

const handleChangePhrase=()=>{
   const quote = getRandomFromArr(phrases)
   setPhraseRandom(quote)
   
   const quoteWall = getRandomFromArr(wallpapers)
    setWallpaperRandom(quoteWall)
}

  return (
    <button className='app__btn' onClick={handleChangePhrase} >Ver otro</button>
  )
}

export default ButtonPhrase
