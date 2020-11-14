import React, { useState } from "react";
import "./notification.css";

const Notification = (props) => {
  const [show, setShow] = useState(false);
  return (
    <div className="notification">
      <div className="notification-header">
        <h2>Github Issues</h2>
        <div className="notification-button" onClick={() => setShow(!show)}>
          <i class="fas fa-bell fa-3x"></i>
          {props.listIssue.length > 0 && (
            <span className="notification-count">{props.listIssue.length}</span>
          )}
        </div>
      </div>

      <div className={!show && "hidden"}>
        <div className="show">
          {props.listIssue.map((item) => (
            <ul>
              <li>{JSON.stringify(item)}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
