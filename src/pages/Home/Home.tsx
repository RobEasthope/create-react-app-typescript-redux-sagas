import * as React from "react";
import { Flex, Text } from "rebass";

const Home = () => (
  <Flex px={4} py={4} alignItems="center">
    <Text fontSize={[2, 2, 3]}>
      <h1>Create-react-app-typescript-redux-sagas</h1>
      <p>This boilerplate example adds:</p>
      <ul>
        <li>Create React App boilerpate with Typescript</li>
        <li>React Redux</li>
        <li>Redux Sagas</li>
        <li>Styled Components</li>
        <li>React specific and Prettier friendly TSlint with a few tweaks</li>
      </ul>
    </Text>
  </Flex>
);

export default Home;
