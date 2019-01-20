import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Flex, Heading } from "rebass";

const Header = () => (
  <Flex px={4} py={4} alignItems="center">
    <Heading fontSize={[4, 5]} color="blue">
      FOO
    </Heading>
    <Box mx="auto" />
    <NavLink exact={true} to="/">
      Home
    </NavLink>
    <NavLink exact={true} to="/repos">
      Repos
    </NavLink>
  </Flex>
);

export default Header;
