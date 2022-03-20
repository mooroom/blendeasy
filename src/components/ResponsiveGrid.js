import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 10px;

  @media (min-width: 200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 350px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

function ResponsiveGrid({ children }) {
  return <GridContainer>{children}</GridContainer>;
}

export default ResponsiveGrid;
