import React from "react";
import "./loadMoreBtn.css";

const LoadMoreBtn = (props) => {
  return (
    <div className="loadMoreBtn" onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  );
};

export default LoadMoreBtn;
