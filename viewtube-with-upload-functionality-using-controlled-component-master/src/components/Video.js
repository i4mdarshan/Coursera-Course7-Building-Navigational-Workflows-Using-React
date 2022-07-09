import React from 'react';
import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: { maxWidth: 345, },
  media: { height: 180, },
});

export default function Video(props) {

  const classes = useStyles();
  const publishedAt = props?.videoDetails?.snippet?.publishedAt ? props?.videoDetails?.snippet?.publishedAt : new Date();
  const uploadTime = moment(publishedAt, moment.defaultFormatUtc).fromNow();

  return (
    <Card elevation={3} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props?.videoDetails?.snippet?.thumbnails?.default?.url}
          title="Contemplative Reptile"
        />

        <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start" >
          <Typography style={{
            marginTop: '-25px', marginRight: '10px', padding: '2px 5px',
            backgroundColor: 'black'
          }} variant="caption" display="block" gutterBottom>
            {"5:29"}
          </Typography>
        </Grid>

        <Grid container direction="row" justifyContent="flex-end" alignItems="flex-start" >
          <Typography variant="body1" gutterBottom>
            {props?.videoDetails?.contentDetails?.length}
          </Typography>
        </Grid>
        <CardContent style={{ minHeight: '140px' }}>
          <Typography variant="subtitle1" gutterBottom title={props?.videoDetails?.snippet?.title}>
            {(props?.videoDetails?.snippet?.title?.length > 50) ? `${props?.videoDetails?.snippet?.title?.substring(0, 50)}...` : props?.videoDetails?.snippet?.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {props?.videoDetails?.snippet?.channelTitle}
          </Typography>

          <Grid container direction="row" justifyContent="space-between" alignItems="center" >
            <Typography variant="caption" display="block" gutterBottom>
              {props?.videoDetails?.statistics?.viewCount ? props?.videoDetails?.statistics?.viewCount:100} views
            </Typography>

            <Typography variant="caption" display="block" gutterBottom>
              {uploadTime}
            </Typography>
          </Grid>

        </CardContent>
      </CardActionArea>
    </Card>
  )
}
