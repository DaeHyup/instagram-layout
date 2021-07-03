import React from 'react';
import './Storyload.css';

function Storyload({ src, desc }) {
  return (
    <div className="main">
      <div className="imglist">
        <img src={src} alt="img" />
        {desc}
      </div>
    </div>
  );
}

export default Storyload;
