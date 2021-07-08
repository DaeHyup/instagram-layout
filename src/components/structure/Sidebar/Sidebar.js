import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <>
      <div className="mynick">
        <img
          src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="logo"
        />
        <div className="colornickname">hyup</div>
        <div className="notcolornickname">hyup</div>
        <div className="exchange">전환</div>
      </div>
      <div className="sidebarothernicklist">
        <div className="recommend">
          <span>회원님을 위한 추천</span>
          <div className="color">모두 보기</div>
        </div>
        <div className="othernick">
          <img
            src="https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="logo"
          />
          <div className="othermynick">hyup</div>
          <div className="otherfollownumber">
            hyup님 외 10명이 팔로우합니다.
          </div>
          <div className="otherfollow">팔로우</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
