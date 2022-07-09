import React from 'react';
import Grid from '@material-ui/core/Grid';
import UploadVideo from '../components/UploadVideo';

export default function Studio(props) {

  return (
    <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" style={{ padding: '20px' }}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
           {/* Return the UploadVideo component with required props */}
           <UploadVideo/>
      </Grid>
    </Grid>
  )
}
