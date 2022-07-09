// The WatchVideo view is used to load Watch component that allows user to view 
// the selected video.

// Additionally it also shows the clips of other videos listed in 
// videocolln.json file

import React from "react";
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import Video from '../../components/home/Video';
import VideosList from '../../assets/videocolln.json';

export default function WatchVideo(props) {

  const [_videoId, setVideoId] = React.useState("");
  const [videosColln, setVideoColln] = React.useState([]);

  // Provide code to read Route Parameter value for videoId.

  React.useEffect(() => {
    // videoId here should contain the value of Video Id passed as Route parameter.
    setVideoId(videoId);

    let videos = VideosList?.items?.map(video => {
      video.snippet.relativeTime = moment(video.snippet.publishedAt, moment.defaultFormatUtc).fromNow();
      video.url = `http://www.youtube.com/watch?v=${video.id}`;
      return video;
    })

    setVideoColln(videos);
  }, [videoId]);

  return (
    <React.Fragment>
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" >
        <Grid style={{ padding: '16px 32px' }} item xs={12} sm={6} lg={8}>
          {/* Launch the Watch Component with videoId passed as props */}
          {/* For invalid videoId the request should redirect to PageNotFound component */}
        </Grid>
        <Grid style={{ padding: '20px' }} item xs={12} sm={6} lg={4}>
          {videosColln?.map((video, index) => <Grid item xs={12} key={index}> <Video videoDetails={video} /> </Grid>)}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
