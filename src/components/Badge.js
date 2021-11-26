import React from "react";
import styled from "styled-components";

const BadgeBlock = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  background: #49c2bb;
  border-radius: 15px;
  padding: 5px 7px;
  color: white;
  font-weight: bold;
  font-size: 11px;
`;

const Badge = ({ text }) => {
  return <BadgeBlock>{text}</BadgeBlock>;
};

export default Badge;
