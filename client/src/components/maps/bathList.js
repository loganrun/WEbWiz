import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";

const listStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    //maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow: "scroll",
    postion: "absolute",
    marginTop: 70

  },
  inline: {
    display: "inline"
  }
}));

export default function AlignItemsList() {
  const classes = listStyles();

  const places = useSelector(
    state => state.bathroom.bathrooms.payload.payload.data
  );
  
  return (
    
    <List className={classes.root}>
      {places.map(list => (
         
      <ListItem alignItems='flex-start' key={list.id}>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' />
        </ListItemAvatar>
        <ListItemText
          primary= {list.name}
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                className={classes.inline}
                color='textPrimary'
              >
                {list.street}<br/> {list.city}<br/>{list.sate}
              </Typography>
              Directions: {list.directions}
            </React.Fragment>
          }
        />
      <Divider variant='inset' component='li' />
      </ListItem>
      ))
      
      }
    </List>
  );
}
