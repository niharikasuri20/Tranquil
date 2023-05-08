import React, { useState, useRef } from 'react';

function Media() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();
  const [type,change] = useState("Relaxation");
  const [imageS,setimage] = useState("/Assets/Relaxation.jpg");
  const [music,changeMusic] = useState("Happy.mp3");

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const selectedMusic = (type) =>{
    change(type);
    changeMusic("/Assets/"+type+".mp3");
    setimage("/Assets/"+type+".jpg");
    <audio ref={audioRef} src={music}/>
  }

  return (

<div className="flex items-center justify-center h-screen bg-gradient-to-r from-neutral-300 to-stone-400">
<ul className="menu menu-compact lg:menu-normal bg-base-100 w-56 p-2 rounded-box">
  <li onClick={ ()=> selectedMusic("Relaxation")}>RELAXATION</li>
  <li onClick={()=> selectedMusic("Calm")}>CALM</li>
  <li onClick={()=> selectedMusic("Meditation")}>MEDITATION</li>
  <li onClick={()=> selectedMusic("Motivation")}>MOTIVATION</li>
  <li onClick={()=> selectedMusic("Work")}>WORK</li>
  <li onClick={()=> selectedMusic("Happiness")}>HAPPINESS</li>
  <li onClick={()=> selectedMusic("Holidays")}>HOLIDAYS</li>
</ul>
   <div className="container mx-auto max-w-xl">
  <div className="App">
   <div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src={imageS} alt="Your Mood Music" /></figure>
<div className="card-body">
  <h2 className="card-title">{type}!</h2>
  <p>Here's some music for {type} </p>
  <audio ref={audioRef} src={music}/>
  <div className="card-actions justify-end">
    <button className="btn btn-primary" onClick={handlePlay}>Play Music</button>
    <button className="btn btn-primary" onClick={handlePause}>Pause Music</button>
     </div>
    </div>
   </div>
  </div>
 </div>
</div>

  );
}

export default Media;