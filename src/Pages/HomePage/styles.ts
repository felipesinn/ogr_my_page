import styled from "styled-components";

export const HeaderStyles = styled.header`
  display: flex;
  background-color: #accabf;
  text-align: center;
  align-items: center;
  padding: 10px;
  color: white;

  div {
    margin-right: auto;
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 90px;
  }

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
  }

`;
export const ImgLogoHeader = styled.img`
    width: 100%;
    height: auto;
    max-width: 200px;
`