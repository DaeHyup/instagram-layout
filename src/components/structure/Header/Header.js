import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {
  Headersection,
  Headerleft,
  Headermiddle,
  Headermiddleinput,
  Headerright,
} from './Header.style';

function Header() {
  return (
    <Headersection>
      <Headerleft>Instagram</Headerleft>
      <Headermiddle>
        <Headermiddleinput type="text" />
        <SearchIcon style={{ fontSize: 13 }} />
        검색
      </Headermiddle>
      <Headerright>
        <HomeOutlinedIcon />
        <SendOutlinedIcon />
        <ExploreOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </Headerright>
    </Headersection>
  );
}

export default Header;
