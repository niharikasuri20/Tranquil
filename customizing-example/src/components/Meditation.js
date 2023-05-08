import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

const Meditation = () => {
  const [videos] = useState([
    {
      id: 'VIDEO_ID_1',
      title: 'Feeling Anxious',
      thumbnail: "/anxious.png",
      url: 'https://www.youtube.com/watch?v=O-6f5wQXSu8',
    },
    {
      id: 'VIDEO_ID_2',
      title: 'Daily Meditation',
      thumbnail:'/daily.png',
      url: 'https://www.youtube.com/watch?v=j7d5Plai03g',
    },
    {
      id: 'VIDEO_ID_3',
      title: 'Feeling Stressed',
      thumbnail:'/stress.png',
      url: 'https://www.youtube.com/watch?v=z6X5oEIg6Ak',
    },
    {
        id: 'VIDEO_ID_1',
        title: 'Falling Asleep',
        thumbnail: "/sleep.png",
        url: 'https://www.youtube.com/watch?v=O-6f5wQXSu8',
      },
      {
        id: 'VIDEO_ID_1',
        title: 'Positive Affirmations',
        thumbnail: "/affirm.png",
        url: ' https://www.youtube.com/watch?v=cyMxWXlX9sU',
      },
      {
        id: 'VIDEO_ID_1',
        title: 'Letting Go',
        thumbnail: "/letgo.png",
        url: ' https://www.youtube.com/watch?v=vtOAnC73xtk',
      },
  ]);

  const [currentVideo, setCurrentVideo] = useState(null);

  const handlePlayVideo = (video) => {
    if (currentVideo && currentVideo.id === video.id) {
      return;
    }

    setCurrentVideo(video);
  };

  return (
    <div>
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-5 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
      <p className="mt-2 text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
          Meditation and Mini-Therapies
        </p><br/>
        <img className="mx-auto h-36" src="/meds.png" alt="notebook" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
            Meditation and mini-therapies can be powerful tools in self-care. They allow you to take time for yourself, process your thoughts and emotions, and manage stress and anxiety. By incorporating these practices into your routine, you can cultivate a greater sense of peace, balance, and well-being in your life.We've curated a collection of 10-minute meditation sessions for your various moods!
            </p>
          </blockquote>
          
        </figure>
      </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id}>
            <h3 className="mt-6 text-lg text-rose-300"><b>{video.title}</b></h3>
            <figure><img src={video.thumbnail} alt="thumbnail" /></figure>
            <button onClick={() => handlePlayVideo(video)}>Play</button>
          </div>
        ))}
      </div>
      {currentVideo && (
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <ReactPlayer
            className="absolute top-0 left-0"
            url={currentVideo.url}
            controls={true}
            width="100%"
            height="100%"
            onEnded={() => setCurrentVideo(null)}
          />
        </div>
      )}
    </div>
  );
};

export default Meditation;
