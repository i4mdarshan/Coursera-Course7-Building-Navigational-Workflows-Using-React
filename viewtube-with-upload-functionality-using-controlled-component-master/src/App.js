import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { viewTubeTheme } from './components/AppThemes';
import Header from './views/Header';
import PlayList from './views/Playlist';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 120,
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
}));


function App(props) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    //Declare a state to add a new Video called  newVideo
    const [newVideo, setNewVideo] = useState("")

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const [age, setAge] = React.useState('');

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
   };
    const handleClose = () => {
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
                                <Dialog 
                                    fullWidth={true}
                                    maxWidth="md"
                                    open={open} 
                                    onClose={handleClose}
                                    scroll="body">
                                    {/* Render the UploadVideoView component with required props */}
                                    <DialogTitle id="form-dialog-title">Upload New Video - Video Details</DialogTitle>
                                    <DialogContent dividers={true}>
                                        {/* <DialogContentText tabIndex={-1}> */}
                                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={6}>
                                                <Grid item md={12}>
                                                    <TextField
                                                            autoFocus
                                                            margin="dense"
                                                            id="videoURL"
                                                            label="videourl"
                                                            type="text"
                                                            fullWidth
                                                            value="some.url"
                                                            variant="outlined"/>
                                                    <TextField
                                                            autoFocus
                                                            margin="dense"
                                                            id="videothumbnailurl"
                                                            label="videothumbnailurl"
                                                            type="text"
                                                            value="some.url"
                                                            fullWidth
                                                            variant="outlined"/>
                                                    <TextField
                                                            margin="dense"
                                                            id="videotitle"
                                                            label="videotitle"
                                                            type="text"
                                                            fullWidth
                                                            variant="outlined"/>
                                                    <TextField
                                                            margin="dense"
                                                            id="description"
                                                            label="description"
                                                            type="text"
                                                            fullWidth
                                                            multiline
                                                            minRows={5}
                                                            variant="outlined"/>
                                                    <TextField
                                                            margin="dense"
                                                            id="video-duration"
                                                            label="videoduration"
                                                            type="text"
                                                            fullWidth
                                                            variant="outlined"/>
                                                    <TextField
                                                            margin="dense"
                                                            id="channel-title"
                                                            label="channeltitle"
                                                            type="text"
                                                            fullWidth
                                                            variant="outlined"/>
                                                    <Typography variant="h5">Audience</Typography>
                                                    <RadioGroup aria-label="audience" name="audience1" value={value} onChange={handleChange}>
                                                        <FormControlLabel id='audience' value="Yes, it's made for kids." control={<Radio role="radio"/>} label="yes, it's made for kids" />
                                                    </RadioGroup>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <TextField
                                                        id="date"
                                                        label="Recording Date"
                                                        type="date"
                                                        className={classes.textField}
                                                        InputLabelProps={{
                                                        shrink: true,
                                                        }}
                                                    />
                                                    <FormControl variant="outlined">
                                                        <InputLabel id="visibility">visibility</InputLabel>
                                                        <Select
                                                        labelId="visibility"
                                                        id="visibility"
                                                        onChange={handleAgeChange}
                                                        label="visibility"
                                                        >
                                                        <MenuItem value="private">private</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <FormControl variant="outlined">
                                                        <InputLabel id="videocategory">videocategory</InputLabel>
                                                        <Select
                                                        labelId="videocategory"
                                                        id="videocategory"
                                                        onChange={handleAgeChange}
                                                        label="videocategory"
                                                        >
                                                        <MenuItem value="comedy">comedy</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <FormControl variant="outlined">
                                                        <InputLabel id="distribution">distribution</InputLabel>
                                                        <Select
                                                        labelId="distribution"
                                                        id="distribution"
                                                        onChange={handleAgeChange}
                                                        label="distribution"
                                                        >
                                                        <MenuItem value="everywhere">everywhere</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <FormControl variant="outlined">
                                                        <InputLabel id="license">license</InputLabel>
                                                        <Select
                                                        labelId="license"
                                                        id="license"
                                                        onChange={handleAgeChange}
                                                        label="license"
                                                        >
                                                        <MenuItem value="creative common license">creative common license</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    <FormControl variant="outlined">
                                                        <InputLabel id="videolocation">videolocation</InputLabel>
                                                        <Select
                                                        labelId="videolocation"
                                                        id="videolocation"
                                                        onChange={handleAgeChange}
                                                        label="videolocation"
                                                        >
                                                        <MenuItem value="los angels">los angels</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item md={6}>
                                                    <TextField
                                                        // autoFocus
                                                        margin="dense"
                                                        id="name"
                                                        label="Email Address"
                                                        type="email"
                                                        fullWidth
                                                        variant="outlined"
                                                    />
                                                    <Typography variant="p">The Url doesn't matches the ViewTube Embed Url Format</Typography>
                                                    <Typography variant="p">video title is required</Typography>
                                                    <Typography variant="p">video channel title is required</Typography>
                                                </Grid>
                                            </Grid>
                                        {/* </DialogContentText> */}
                                        
                                        
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} variant="outlined" color="primary">
                                            Save
                                        </Button>
                                        <Button onClick={handleClose} variant="contained" color="primary">
                                            Save
                                        </Button>
                                    </DialogActions>
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
