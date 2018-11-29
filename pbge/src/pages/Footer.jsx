import React from "react";
import { Container, Menu as SMenu } from "semantic-ui-react";

const Footer = () => (
  <SMenu fixed="bottom">
    <Container>
      <SMenu.Item>
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
          React Documentation
        </a>
      </SMenu.Item>
      <SMenu.Item>
        <a
          href="https://reactjs.org/docs/typechecking-with-proptypes.html"
          target="_blank"
        >
          PropTypes React Documentation
        </a>
      </SMenu.Item>
      <SMenu.Item>
        <a href="https://github.com/axios/axios" target="_blank">
          Axios Documentation
        </a>
      </SMenu.Item>
      <SMenu.Item>
        <a href="https://react.semantic-ui.com/" target="_blank">
          React.Semantic Doc
        </a>
      </SMenu.Item>
      <SMenu.Item>
        <a
          href="https://reacttraining.com/react-router/web/example/url-params"
          target="_blank"
        >
          React router Doc
        </a>
      </SMenu.Item>
    </Container>
  </SMenu>
);

export default Footer;