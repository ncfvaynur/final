import React from "react";
import "./video.css";

const VideoSection = () => {
  return (
    <>
      <div className="video pb-5 d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center container">
          <div className="box d-flex flex-column justify-content-center align-items-center">
            <h2>Watch our video</h2>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              type="button"
              className="video-btn d-flex align-items-center justify-content-center"
            >
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >x</button>
              <video className="w-100 h-100" autoPlay src="https://assets.mixkit.co/videos/preview/mixkit-cover-a-strawberry-with-chocolate-syrup-on-a-red-background-41115-large.mp4"></video>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
