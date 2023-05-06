import React from "react";
import "./model-block.css";

function ModelBlock(props) {
  return (
    <div className="model-block">
      <img src={props.imgPath} className="image-block" />
      <div className="text-content-block">
        <h4>
          <a href="">{props.hrefContent}</a>
        </h4>
        <p>{props.pContent}</p>
      </div>
    </div>
  );
}

export default ModelBlock;
