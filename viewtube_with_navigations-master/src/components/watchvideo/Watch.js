// The Watch component is loaded from the WatchVideo view, that allows user to 
// watch the video selected by the user.

import React from 'react';

import Grid from '@material-ui/core/Grid';

function Watch(props) {
  const videoPlayerContainerRef = React.useRef(null);
  return (
    <Grid ref={videoPlayerContainerRef} container direction="row" justifyContent="center" alignItems="center" >
      <iframe
        title="YouTube video player"
        src={(props?.videoSource) ? props.videoSource : (props?.videoId) ? `https://www.youtube.com/embed/${props.videoId}` : ""}
        height='650px' width="100%"
      />
    </Grid>
  )
}

export default React.memo(Watch);
