import React, { use, useState ,useRef } from 'react'
import './MusicPlayer.CSS'
import { songs } from './songs'
const MusicPlayer = () => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const [isPlaying,setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const currentSong = songs[currentIndex];
    const prev = songs[(currentIndex -1 + songs.length)%songs.length];
    const next = songs[(currentIndex + 1) % songs.length];

    function togglePlay(){
        if(isPlaying){
            audioRef.current.pause();
          
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    function nextSong(){
        setCurrentIndex((prev)=> (prev+1)%songs.length);
        setIsPlaying(false);
        
    }
    function prevSong(){
        setCurrentIndex((prev)=> (prev-1+ songs.length)%songs.length);
        setIsPlaying(false);
        
    }
  return (
    <div className="body">
        <div className= "MusicPlayerContainer">
        <img src={currentSong.imgsrc} alt="Image of the current song" />
        <div className='MusicBars'>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
        <h3>{currentSong.title}</h3>
        <h4>{currentSong.artist}</h4>
        <audio src={currentSong.src} ref={audioRef} onEnded={nextSong} preload='auto'>

        </audio>
        <div className='btn-div'>
            <button onClick={prevSong}>Prev: {prev.title}</button>
        <button onClick={togglePlay}>{isPlaying ? "Pause":"Play"}</button>
        <button onClick={nextSong}>Next: {next.title}</button>
      </div>
      
      
        
    </div>
    </div>
    
  )
}

export default MusicPlayer
