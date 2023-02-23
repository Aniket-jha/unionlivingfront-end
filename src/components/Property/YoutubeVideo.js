import React from 'react'
import YouTube from 'react-youtube';
import { Zoom } from 'react-reveal'
const YoutubeVideo = ({propertyDetail}) => {
     const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
  
    <div id="video" className='mt-12  w-[100%] px-12 py-12 border-[1px] rounded-xl border-[#d0d0d0]'>
        <div className='flex items-center justify-center'>
           <Zoom>
             <iframe
     
      src={`https://www.youtube.com/embed/${propertyDetail && propertyDetail.YoutubeVideo}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className='w-full h-[100%] lg:h-[80vh] rounded-xl '
    />
     </Zoom>
        </div>
    </div>
   
  )
}

export default YoutubeVideo