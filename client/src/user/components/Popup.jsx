import React from 'react';
import './Popup.css'; // 

function Popup() {
  return (
    <div className="blank-box">
      <div className="inner-box">
        <h2>ALL THE BEST</h2>
        <p>Are you sure you want to start the quiz?</p>
        <div className="button-container">
          <button className="button">Yes</button>
          <button className="button">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
