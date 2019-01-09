import * as React from "react";
import styled from "styled-components";
import Container from "../../components/layout/Container";
import Page from "../../components/layout/Page";

export default () => (
  <Page>
    <Container>
      <PageContent>
        <h1>Welcome!</h1>
      </PageContent>
    </Container>
  </Page>
);

const PageContent = styled("article")`
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;

  a {
    color: red;
  }

  h1,
  h2,
  h3,
  h4 {
    margin-bottom: 0.5rem;
    font-family: "IBM Plex Sans", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      Arial, sans-serif;
    line-height: 1.25;
  }
`;
