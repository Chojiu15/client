/*                                                   *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *****************************************************
 *  Ce fichier est le Menu responsive                *
 *            de l'application                       *
 *                                                   *
 ****************************************************/
import React from "react";
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
              //size="maxi"
              src={logo}
              style={{ marginRight: "1.5em" }}
              className="logo"
            />
          </SMenu.Item>
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
            <SMenu.Item>
              <Button primary>Sign Up</Button>
            </SMenu.Item>
          </SMenu.Menu>
          {/* 
  // 
        <SMenu.Item active={isMatching(pathname, '/companies')}>
          <Link to="/companies">Companies</Link>
        </SMenu.Item>
        <SMenu.Item active={isMatching(pathname, '/members')}>
          <Link to="/members">Members</Link>
        </SMenu.Item> 
        */}
        </Container>
      </SMenu>
    </div>
  );
};

export default withRouter(Menu);
