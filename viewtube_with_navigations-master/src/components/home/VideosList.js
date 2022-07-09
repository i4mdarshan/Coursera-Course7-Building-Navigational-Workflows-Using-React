import { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';

import moment from 'moment';


import Video from './Video';
import VideosList from '../../assets/videocolln.json';

export default function VideoList() {

  const [videosColln, setVideoColln] = useState();

  useEffect(() => {
    let videos = VideosList?.items?.map(video => {
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.url = `http://www.youtube.com/watch?v=${video.id}`;
      return video;
    })
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
