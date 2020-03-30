import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";

import "./style.scss";

const Layout = ({ children }) => {
  return (
    <Container fluid className="dj min-full-height">
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
