import styled from "styled-components";

const Container = styled("div")`
  margin: 0 auto;
  width: 100%;
  max-width: ${(props: { theme: { widths: { md: any } } }) =>
    props.theme.widths.md};

  @media (min-width: ${(props: { theme: { breakpoints: { lg: any } } }) =>
      props.theme.breakpoints.lg}) {
    max-width: ${(props: { theme: { widths: { lg: any } } }) =>
      props.theme.widths.lg};
  }

  @media (min-width: ${(props: { theme: { breakpoints: { xl: any } } }) =>
      props.theme.breakpoints.xl}) {
    max-width: ${(props: { theme: { widths: { xl: any } } }) =>
      props.theme.widths.xl};
  }
`;

export default Container;
