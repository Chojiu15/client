import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Image, Menu as SMenu } from "semantic-ui-react";
import logo from "./logo.jpg";

/**
 * The menu is connected to the router and re-render each time the location changes
 * See withRouter HOC : https://reacttraining.com/react-router/web/api/withRouter
 */
const Menu = ({ location: { pathname } }) => {
  return (
    <SMenu>
      <Container>
        <SMenu.Item as={Link} to="/" header>
          <Image
            size="mini"
            src={logo}
            style={{ marginRight: "1.5em" }}
            className="logo"
          />
          Wild OS
        </SMenu.Item>

        <SMenu.Item active={pathname === "/"}>
          <Link to="/">Desktop</Link>
        </SMenu.Item>
        <SMenu.Item active={pathname === "/search"}>
          <Link to="/search">Search engine</Link>
        </SMenu.Item>
        {/* 
  // TIPS : Thoses links are just an example !!!! REPLACE THEME !
        <SMenu.Item active={isMatching(pathname, '/participants')}>
          <Link to="/participants">Participants</Link>
        </SMenu.Item>
        <SMenu.Item active={isMatching(pathname, '/classement')}>
          <Link to="/classement">Classement</Link>
        </SMenu.Item> 
        */}
      </Container>
    </SMenu>
  );
};

export default withRouter(Menu);