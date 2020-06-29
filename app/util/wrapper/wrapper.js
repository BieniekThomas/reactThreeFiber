import React from "react";
import "./wrapper.scss";

export default ({ children }) => {
  if (children.length > 1) {
    return children.map((item) => {
      return <div className="wrapper">{item}</div>;
    });
  } else {
    return <div className="wrapper">{children}</div>;
  }
};
