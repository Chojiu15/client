import React from "react";
import { Container } from "semantic-ui-react";

import Menu from "./Menu";
import Footer from "./Footer";

/**
 * Wrap the children component into a <Container /> and a <Menu /> and a <Footer />
 * See : https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx
 */
const Layout = ({ children }) => {
  return (
    <Container size="massive">
      <Menu />

      <Container>{children}</Container>

      <Footer />
    </Container>
  );
};

export default Layout;
