import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import {
  Responsive,
  Segment,
  Container,
  Button,
  Image,
  Menu as SMenu
} from "semantic-ui-react";
import logo from "./logo.jpg";
import CSS from "./pages.css";

/**
 * The menu is connected to the router and re-render each time the location changes
 * See withRouter HOC : https://reacttraining.com/react-router/web/api/withRouter
 */
const ResponsiveExampleMixed = () => (
  <Responsive as={Segment} minWidth={320} maxWidth={2559}>
    Visible only if display has width between <code>320px</code> and{" "}
    <code>2559px</code>
  </Responsive>
);

const Menu = ({ location: { pathname } }) => {
  return (
    <div className="container">
      <SMenu size="massive">
        <Container>
          <SMenu.Item>
            <Image
              href="./"
              size="maxi"
              src={logo}
              style={{ marginRight: "1.5em" }}
              className="logo"
            />
          </SMenu.Item>
          {/*
//        <SMenu.Item active={pathname === "/"}> 
          <Link to="/">Desktop</Link>   
</SMenu.Item>   */}
          <SMenu.Item active={pathname === "/companies"}>
            <Link to="/companies">Entreprise / ORGANISATION</Link>
          </SMenu.Item>
          <SMenu.Item active={pathname === "/members"}>
            <Link to="/members"> MEMBRES ASSOCIATION</Link>
          </SMenu.Item>

          <SMenu.Menu position="right">
            <SMenu.Item active={pathname === "/search"}>
              <Link to="/search">RECHERCHE ANNUAIRE</Link>
            </SMenu.Item>
            <SMenu.Item className="registerButton">
              <div>
                <Button href="./enregistrement" primary>
                  Enregistrez-vous
                </Button>
              </div>
              <div className="connectButton">
                <Button href="./connexion" secondary>
                  Connectez-vous
                </Button>
              </div>
            </SMenu.Item>
          </SMenu.Menu>
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
    </div>
  );
};

export default withRouter(Menu);
