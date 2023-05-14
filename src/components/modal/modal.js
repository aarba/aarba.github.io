import React, { useEffect, useRef } from "react";
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

  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  const handleScroll = () => {
    if (contentRef.current && overlayRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
      const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight;
      overlayRef.current.style.opacity = isScrolledToBottom ? 0 : 1;
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="modal-wrapper">
      <div className="modal-background" onClick={props.onClose}></div>
      <div className="modal-content">
        <div className="close-icon" onClick={props.onClose}>
          X
        </div>
        <div className="scrollable-content" ref={contentRef}>
          {props.children}
        </div>
        <div className="fading-overlay" ref={overlayRef}></div>
      </div>
    </div>
  );
}

export default Modal;
