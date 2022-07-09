import Grid from '@material-ui/core/Grid';
import FilterVideos from '../components/FilterVideos';
import VideoList from '../components/VideosList'

export default function PlayList(props) {
  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0}>
      <Grid item sm={12}>
        <FilterVideos />
      </Grid>

      <Grid item sm={12}>
        <VideoList newVideo={props.newVideo} />
      </Grid>
    </Grid>
  )
}