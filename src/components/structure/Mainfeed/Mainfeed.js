import React from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import { makeStyles } from '@material-ui/core/styles';
import './Mainfeed.css';

const useStyles = makeStyles({
  buttonstyle: {
    color: 'red',
  },
});

function Mainfeed() {
  const classes = useStyles();
  return (
    <div className="feed">
      <div className="feedtop">
        <img
          src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="logo"
        />
        <p>hyup</p>
        <MoreHorizIcon />
      </div>
      <div className="feedimg">
        <img
          src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="logo"
        />
      </div>
      <div className="imageunder">
        <div className="imageunderleft">
          <FavoriteBorderIcon className={classes.buttonstyle} />
          <ChatBubbleOutlineIcon />
          <SendIcon />
        </div>
        <div className="imageunderright">
          <TurnedInNotIcon />
        </div>
      </div>
    </div>
  );
}

export default Mainfeed;
