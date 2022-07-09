import { Button, DialogActions, Grid } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { viewTubeTheme } from './components/AppThemes';
import Header from './views/Header';
import PlayList from './views/Playlist';
import React, { useState } from 'react';
import { Dialog } from '@material-ui/core';
import Studio from './views/UploadVideoView';

function App(props) {
    const [open, setOpen] = React.useState(false);

     //Declare a state to add a new Video called newVideo
     const [newVideo, setNewVideo] = useState("")
  
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {    console.log("closing");
        setOpen(false);
    };

     // Store the form data obtained from the child to its state

    return (
        <ThemeProvider theme={viewTubeTheme}>
            <CssBaseline>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0}>
                    <Grid item xs={12}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0}>
                            <Grid item xs={12}>
                                <Header handleDialogClick={handleClickOpen} showActions={false} />
                            </Grid>
                            <Grid item xs={12}>
                                <PlayList newVideo={newVideo} name="New Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='md' scroll='body'>
                                     {/* Render the UploadVideoView component with required props */}
                                    <Studio></Studio>
                                </Dialog>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default App;
