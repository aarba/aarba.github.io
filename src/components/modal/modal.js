import React, { useEffect } from "react";
import "./modal.css";

function Modal(props) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props.onClose]);

  return (
    <div className="modal-wrapper">
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-content">{props.children}</div>
    </div>
  );
}

export default Modal;
