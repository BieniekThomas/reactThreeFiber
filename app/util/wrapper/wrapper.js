import React from "react";
import "./wrapper.scss";

export default (props) => {
  return props.children.map((item) => {
    return <div className="wrapper">{item}</div>;
  });
};
