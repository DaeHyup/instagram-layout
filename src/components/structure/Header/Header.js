import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { Headersection, Headerleft } from './Header.style';

function Header() {
  return (
    <Headersection>
      <Headerleft>Instagram</Headerleft>
      <div className="header__middle">
        <input type="text" />
        <SearchIcon />
        검색
      </div>
      <div className="header__right">
        <HomeOutlinedIcon />
        <SendOutlinedIcon />
        <ExploreOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </Headersection>
  );
}

export default Header;
