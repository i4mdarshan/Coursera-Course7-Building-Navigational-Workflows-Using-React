import React from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ExploreIcon from '@material-ui/icons/Explore';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

export default function SideDrawer(props) {

  return (
    <Drawer anchor={"left"} open={props.openSideDrawer} onClose={props.toggleDrawer}>
      <List>
          <ListItem button key={"home"}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>

        <ListItem button key={"explore"}>
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary={"Explore"} />
        </ListItem>

        <ListItem button key={"subscriptions"}>
          <ListItemIcon>
            <SubscriptionsIcon />
          </ListItemIcon>
          <ListItemText primary={"Subscriptions"} />
        </ListItem>

        <ListItem button key={"library"}>
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary={"Library"} />
        </ListItem>

        <ListItem button key={"history"}>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <ListItemText primary={"History"} />
        </ListItem>
      </List>

      <Divider />

      <Typography
        variant="body2"
        gutterBottom
        style={{ margin: '10px' }}
      >
        Sign in to like videos,
      </Typography>

      <Typography
        variant="body2"
        gutterBottom
        style={{ margin: '10px' }}
      >
        comment, and subscribe.
      </Typography>

      <Grid container direction="row" justifyContent="center" alignItems="center" spacing={0}>
        <Button variant="outlined" color="primary">
          <AccountCircle /> Sign In
        </Button>
      </Grid>
    </Drawer>
  )
}
