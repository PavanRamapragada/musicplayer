import {useState, useEffect} from 'react';
import Player from './components/player'

function App() {

  const [songs]=useState([
    {
      title: "Thendral Vanthu",
      artist: "Ilayaraja, S. Janaki",
      img_src: './images/Raja/Avatharam.jpeg',
      src: './Albums/Ilayaraja/Avathaaram/Thendral-Vanthu.mp3'
    },

    {
      title: "Chilakamma Chitikeyanta",
      artist: "SP Balasubrahmanyam, K.S.Chitra",
      img_src: './images/Raja/Dalapathi.jpeg',
      src: './Albums/Ilayaraja/Dalapathi/04 Chilakamma.mp3'
    },

    {
      title: "Nee paartha paarvai",
      artist: "Aasha Bhonsle, Hari Haran",
      img_src: './images/Raja/HeyRam.jpeg',
      src: './Albums/Ilayaraja/Hey Ram/Nee-Partha.mp3'
    },

    {
      title: "Sundari Neeve",
      artist: "SP Balasubrahmanyam, K.S.Chitra",
      img_src: './images/Raja/Dalapathi.jpeg',
      src: './Albums/Ilayaraja/Dalapathi/03 Sundari Neeve.mp3'
    },

    {
      title: "Nelluri Nerajana",
      artist: "Hariharan, Mahalakshmi Iyer",
      img_src: './images/Rahman/Oke Okkadu.jpeg',
      src: './Albums/ARR/Yuva(2004)/Jana Gana Mana.mp3'
    },
    
    {
      title: "Chakori",
      artist: "A.R.Rahman",
      img_src: './images/Rahman/SSS.jpeg',
      src: './Albums/ARR/Nuvvu Nenu Pream(2006)/01. New York Nagarama.flac'
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex]=useState(0);
  const [nextSongIndex, setNextSongIndex]=useState(currentSongIndex+1);  

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1){
        return 0;
      }
      else return currentSongIndex + 1;
    });
  }, [currentSongIndex])
   
  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
