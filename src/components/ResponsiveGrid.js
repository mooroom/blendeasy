import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 100%;
  display: grid;
  row-gap: 15px;
  column-gap: 10px;
  flex: 1;
  overflow: auto;
  padding-bottom: 90px;

  @media (min-width: 200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 350px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

function ResponsiveGrid({ children }) {
  return <GridContainer>{children}</GridContainer>;
}

export default ResponsiveGrid;
