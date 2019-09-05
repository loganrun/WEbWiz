import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import bathicon from "../../assets/images/bathicon.jpg"

const listStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    overflow: "scroll",
    position: "absolute",
    marginTop: 70

  },
  inline: {
    display: "inline"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  }
}));

const bath = bathicon

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
          <Avatar src= {bath} alt='Remy Sharp' className={classes.bigAvatar} />
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
              <Typography variant="body1">
              Directions: {list.directions}
              </Typography>
             
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
