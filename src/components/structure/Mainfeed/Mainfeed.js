import React, { useState } from 'react';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendIcon from '@material-ui/icons/Send';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import { makeStyles } from '@material-ui/core/styles';
import './Mainfeed.css';
import Modal from '../Modal/Modal';

const useStyles = makeStyles({
  heart: {
    marginRight: '15px',
  },
  chat: {
    marginRight: '15px',
  },
  horiz: {
    cursor: 'pointer',
  },
});

function Mainfeed() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="feed">
        <div className="feedtop">
          <img
            src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="logo"
          />
          <p>hyup</p>
          <MoreHorizIcon className={classes.horiz} onClick={openModal} />
          <Modal
            open={modalOpen}
            close={closeModal}
            header="Modal heading"
          ></Modal>
        </div>
        <div className="feedimg">
          <img
            src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="logo"
          />
        </div>
        <div className="imageunder">
          <div className="imageunderleft">
            <FavoriteBorderIcon className={classes.heart} />
            <ChatBubbleOutlineIcon className={classes.chat} />
            <SendIcon />
          </div>
          <div className="imageunderright">
            <TurnedInNotIcon />
          </div>
        </div>
        <div className="feedcomment">
          <div className="feedcommentlike">
            <strong>????????? 1,000???</strong>
          </div>
          <div className="feedcommentsentence">
            <strong>hyup</strong>
            <span>nice meet you</span> ...
            <span className="moresentence">??? ??????</span>
            <p className="nummoresentence">?????? 10??? ?????? ??????</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mainfeed;
