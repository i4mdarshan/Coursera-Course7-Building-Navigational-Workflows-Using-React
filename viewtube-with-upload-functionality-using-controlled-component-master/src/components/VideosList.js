import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Video from './Video';
import VideosList from '../data/videocolln.json';


export default function VideoList(props) {
  const [videosColln, setVideoColln] = useState();
  
  //Create a video JSON object with proper keys that is suitable for adding in the VideosColln
  
   useEffect(() => {
     let videos = VideosList?.items?.map(video => {
      video.url = `http://www.youtube.com/watch?v=${video.id}`;
      return video;
    })

    //Add the new video to the videoColln object
    
    setVideoColln(videos);
   
  }, []);

  return (
    <div style={{ padding: '20px' }} >
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>
        {videosColln?.map((video, index) =>
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <Video videoDetails={video} />
          </Grid>)}
      </Grid>
    </div>
  )
}
