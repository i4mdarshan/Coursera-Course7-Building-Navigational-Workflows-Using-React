import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@material-ui/core';
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
const audienceTypes = ["Yes, it's made for kids.", "Not for kids."];
const ageRestrictions = ["Yes, restrict my video to viewers over 18.", "No, don't restrict my video to viewers over 18 only."];
const videoLocations = ["None", "Los Angels", "New York"];
const licenses = ["Standard ViewTube license", "Creative common license"];
const distributions = ["Everywhere", "Make this video available only on menetize..."];
const videoCategories = [
  "Film & animation",
  "Autos & vehicles",
  "Music",
  "Pets & Animals",
  "Sports",
  "Travel & Events",
  "Gaming",
  "People & Blogs",
  "Comedy",
  "Entertainment",
  "News & Politics",
  "Howto & Style",
  "Education",
  "Science & Technology",
  "Nonprofits & Activism"
];
const visibilities = ["Private", "Public"];

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


export default function UploadVideo(props) {

    const classes = useStyles();
    //Declare a state to add a new Video called  newVideo

    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [age, setAge] = React.useState('');

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    // const handleClose = () => {
    //     setOpen(false);
    // };

  // Create Validation schema object using yup for validating form fields
  const validationSchema = yup.object({
    videourl: yup
      .string('Enter your video URL')
      .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          'Enter valid url'
      )
      .required('video url is required'),
    videotitle: yup
      .string('Enter your video title')
      .required('video title is required'),
    videochanneltitle: yup
      .string('Enter your channel title')
      .required('channel title is required'),
    videoduration: yup
      .string('Enter video duration'),
    description: yup
      .string('Enter your video description')
      .required('video description is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  // Create formik instance using useFormik hook with mandatory props like initialValues,
  // validationSChema and onSubmit
  /* Write code to return all the form fields with all required props
               Give the label,id and name attribute value for each of the form fields as mentioned below:
               1. videoUrl
               2. videoThumbnailUrl
               3. videoTitle 
               4. description
               5. videoDuration
               6. videochannelTitle
               7. audienceType
               8. ageRestriction
               9. tags
               10. recordingDate
               11. videoLocation
               12. license
               13. distribution
               14. videoCategory
               15. visibility
    */
  const formik = useFormik({
    initialValues: {
      videourl: "",
      videotitle: "",
      videochanneltitle: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Render the UploadVideoView component with required props */}
      <DialogTitle id='form-dialog-title'>
        {" "}
        Upload New Video - Video Details
      </DialogTitle>
      <DialogContent dividers={true}>
        {/* <DialogContentText tabIndex={-1}> */}
          <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            spacing={6}
          >
            <Grid item md={12}>
              <TextField
                autoFocus
                margin='dense'
                id='videourl'
                label='videourl'
                name='videourl'
                type='text'
                fullWidth
                multiline
                minRows={2}
                role="textbox"
                variant='outlined'
                value={formik.values.videourl}
                onChange={formik.handleChange}
                error={formik.touched.videourl && Boolean(formik.errors.videourl)}
                helperText={formik.touched.videourl && formik.errors.videourl}
              />
              <TextField
                autoFocus
                margin='dense'
                id='videothumbnailurl'
                label='videothumbnailurl'
                type='text'
                value='some.url'
                fullWidth
                variant='outlined'
              />
              <TextField
                margin='dense'
                id='videotitle'
                label='videotitle'
                type='text'
                fullWidth
                variant='outlined'
                multiline
                minRows={2}
                name='videotitle'
                role="textbox"
              />
              <TextField
                margin='dense'
                id='description'
                label='description'
                type='text'
                fullWidth
                multiline
                minRows={5}
                variant='outlined'
              />
              <TextField
                margin='dense'
                id='video-duration'
                label='videoduration'
                name='videoduration'
                type='text'
                fullWidth
                multiline
                minRows={2}
                variant='outlined'
                role="textbox"
              />
              <TextField
                margin='dense'
                id='channel-title'
                label='videochanneltitle'
                name='videochanneltitle'
                type='text'
                multiline
                minRows={2}
                fullWidth
                variant='outlined'
                role="textbox"
              />
              <Typography variant='h5'>Audience</Typography>
              <RadioGroup
                aria-label='audience'
                name='audience1'
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  id='audience'
                  value="Yes, it's made for kids."
                  control={<Radio name="yes, it's made for kids." role='radio' />}
                  label="yes, it's made for kids."
                />
              </RadioGroup>
            </Grid>
            <Grid item md={6}>
              <TextField
                id='date'
                label='Recording Date'
                type='date'
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <FormControl variant='outlined'>
                <InputLabel id='visibility'>visibility</InputLabel>
                <Select
                  labelId='visibility'
                  id='visibility'
                  onChange={handleAgeChange}
                  label='visibility'
                >
                  <MenuItem value='private'>private</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='outlined'>
                <InputLabel id='videocategory'>videocategory</InputLabel>
                <Select
                  labelId='videocategory'
                  id='videocategory'
                  onChange={handleAgeChange}
                  label='videocategory'
                >
                  <MenuItem value='comedy'>comedy</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='outlined'>
                <InputLabel id='distribution'>distribution</InputLabel>
                <Select
                  labelId='distribution'
                  id='distribution'
                  onChange={handleAgeChange}
                  label='distribution'
                >
                  <MenuItem value='everywhere'>everywhere</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='outlined'>
                <InputLabel id='license'>license</InputLabel>
                <Select
                  labelId='license'
                  id='license'
                  onChange={handleAgeChange}
                  label='license'
                >
                  <MenuItem value='creative common license'>
                    creative common license
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl variant='outlined'>
                <InputLabel id='videolocation'>videolocation</InputLabel>
                <Select
                  labelId='videolocation'
                  id='videolocation'
                  onChange={handleAgeChange}
                  label='videolocation'
                >
                  <MenuItem value='los angels'>los angels</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6}>
              <TextField
                // autoFocus
                margin='dense'
                id='name'
                label='Email Address'
                type='email'
                fullWidth
                variant='outlined'
              />
              <Typography variant='p'>
                The Url doesn't matches the ViewTube Embed Url Format
              </Typography>
              <Typography variant='p'>video title is required</Typography>
              <Typography variant='p'>video channel title is required</Typography>
            </Grid>
          </Grid>
        {/* </DialogContentText> */}
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
        <Button variant='contained' color='primary' type='submit'>
          Save
        </Button>
      </DialogActions>
    </form>
  );
}
