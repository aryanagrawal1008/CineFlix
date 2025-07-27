import React from 'react'
import "../App.css";
function Banner({page}) {
  return (
    <>
      <div className="card text-bg-dark box-size">
        <img
          src="https://i.ytimg.com/vi/NX4t9eOTw2Y/maxresdefault.jpg"
          className="card-img "
          alt="..."
        />
        <div className="card-img-overlay">
          <h5 className="card-title bgblur">Fantastic 4</h5>
        </div>
      </div>
      <p
        className="font-monospace"
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "10px 0px",
        }}
      >
        Page {page} - Action Movies (IMDb 6–7.8)
      </p>
    </>
  );
}

export default Banner