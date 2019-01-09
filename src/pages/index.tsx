import * as React from "react";
import styled from "styled-components";
import Container from "../components/layout/Container";
import Page from "../components/layout/Page";

export default () => (
  <Page>
    <Container>
      <PageContent>
        <h1>Welcome!</h1>
        <p>
          Welcome to the Redux 4 + TypeScript 2.9 example! This example site
          shows you the ideal project structure, recommended libraries, as well
          as design pattern on writing type-safe React + Redux app with
          TypeScript.
        </p>
        <p>
          This project is intended as a supplement to{" "}
          <a
            href="https://resir014.xyz/posts/2018/07/06/redux-4-plus-typescript/"
            target="blank"
            rel="noopener noreferrer"
          >
            this post
          </a>
          . To demonstrate it, I created a website which pulls data from the{" "}
          <a
            href="https://docs.opendota.com"
            target="blank"
            rel="noopener noreferrer"
          >
            OpenDota API
          </a>
          , and display information like professional teams, heroes, as well as
          top players by hero. This will also demonstrate how to structure your
          stores for each feature/module in a Redux-enabled app.
        </p>
        <p>Enjoy your stay!</p>
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
    font-family: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Arial, sans-serif";
    line-height: 1.25;
  }
`;
