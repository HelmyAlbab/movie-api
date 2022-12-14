import React from "react";

import "./page-header.scss";
import FooterBg from "../../assets/footer-bg.jpg";

const PageHeader = (props) => {
  return (
    <div
      className="page-header"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
