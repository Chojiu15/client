import React from "react";
import { Container, Menu as SMenu } from "semantic-ui-react";

const Footer = () => (
  <SMenu fixed="bottom">
    <Container>
      <SMenu.Item>
        <a target="_blank" href="https://www.dupaysbasqueauxgrandesecoles.org/">
          Qui sommes nous ?
        </a>
      </SMenu.Item>
      <SMenu.Item>
        <a
          href="https://www.helloasso.com/associations/du-pays-basque-aux-grandes-ecoles"
          target="_blank"
        >
          Nous rejoindre
        </a>
      </SMenu.Item>
      <SMenu.Item>Copyright</SMenu.Item>
      <SMenu.Item>A propos</SMenu.Item>
    </Container>
  </SMenu>
);

export default Footer;
