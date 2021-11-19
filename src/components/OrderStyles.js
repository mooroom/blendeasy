import styled, { css } from "styled-components";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
    `;
  }}
`;

export const Header = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  font-weight: bold;
  font-size: 18px;
  color: white;
  align-items: center;

  span {
    margin-left: 15px;
  }

  ${colorStyles}
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  padding-top: 30px;
  position: relative;
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const BtnRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 10px;
  }
`;

export const PlaceBtn = styled.div`
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  & + & {
    margin-left: 10px;
  }

  .title {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .addr {
    font-size: 11px;
    color: gray;
  }

  ${(props) =>
    props.empty &&
    css`
      box-shadow: none;
    `}
`;

export const ConfirmBtn = styled.div`
  position: fixed;
  bottom: 20px;
  left: 30px;
  right: 30px;
  padding: 15px;
  text-align: center;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${(props) =>
    props.type === "baemin" ? "var(--baemin)" : "var(--coupang)"};
`;
