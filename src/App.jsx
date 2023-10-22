import { useState } from 'react'
import phrases from './utils/phrases.json'
import Phrase from './components/Phrase'
import getRandomFromArr from './services/getRandomFromArr'
import ButtonPhrase from './components/ButtonPhrase'
import wallpapers from './utils/wallpapers.json'

function App() {

  const quote = getRandomFromArr(phrases)
  const [phraseRandom, setPhraseRandom] = useState(quote)

  const quoteWall = getRandomFromArr(wallpapers)
  const [wallPaperRandom,setWallpaperRandom]=useState(quoteWall)
  
  const objStyle = {
    backgroundImage: `url(${wallPaperRandom.fondo})`
  }
  return (
    <div style={objStyle} className='app'>
      <h1 className='app__title'>Galleta de la fortuna</h1>
      <article className='app__card'>
        <Phrase
          phraseRandom={phraseRandom}
        />
        <ButtonPhrase
          setPhraseRandom={setPhraseRandom}
          setWallpaperRandom={setWallpaperRandom}
        />
      </article>
    </div>
  )
}


export default App
