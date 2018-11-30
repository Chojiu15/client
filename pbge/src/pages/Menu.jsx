import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Container, Image, Menu as SMenu } from "semantic-ui-react";
import logo from "./logo.jpg";

/**
 * The menu is connected to the router and re-render each time the location changes
 * See withRouter HOC : https://reacttraining.com/react-router/web/api/withRouter
 */

const Menu = ({ location: { pathname } }) => {
  return (
    <div className="container">
      <SMenu size="massive">
        <Container>
          <SMenu.Item as={Link} to="/" header>
            <Image
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
          <SMenu.Item active={pathname === "/directories"}>
            <Link to="/directories">Entreprise / ORGANISATION</Link>
          </SMenu.Item>
          <SMenu.Item active={pathname === "/members"}>
            <Link to="/members"> MEMBRES ASSOCIATION</Link>
          </SMenu.Item>
          <SMenu.Item active={pathname === "/search"}>
            <Link to="/search">RECHERCHE ANNUAIRE</Link>
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
    </div>
  );
};

export default withRouter(Menu);
