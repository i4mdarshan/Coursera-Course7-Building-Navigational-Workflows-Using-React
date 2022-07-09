import Grid from '@material-ui/core/Grid';

import FilterVideos from '../../components/home/FilterVideos';
import VideoList from '../../components/home/VideosList';

export default function Home() {
    return (
      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0}>
        <Grid item sm={12}>
          <FilterVideos />
        </Grid>
  
        <Grid item sm={12}>
          <VideoList />
        </Grid>
      </Grid>
    );
  }