import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 6vh;
  background-color: #2b2a2a;
  color: var(--white);

  small {
    padding-bottom: 5px;
    text-transform: uppercase;
    font-family: var(--advent);
    font-size: 12px;
    letter-spacing: 1.2px;
  }
`;

const todayDate = new Date().getFullYear();

const Footer = () => {
  return (
    <FooterContainer>
      <small>&copy; {todayDate} | Tropa Digital</small>
    </FooterContainer>
  );
};

export default Footer;
