import React from "react";
import frame1 from "../assests/icons/frame.png";
import frame2 from "../assests/icons/frame2.png";
import frame3 from "../assests/icons/frame3.png";
import {
  HomeAsideContentContainer,
  HomeAsideContentItemMenu,
} from "../styles/TropaStyled";

const HomeAsideContent = () => {
  return (
    <HomeAsideContentContainer>
      <HomeAsideContentItemMenu>
        <img src={frame1} alt="" />
        <span>Início</span>
      </HomeAsideContentItemMenu>
      <HomeAsideContentItemMenu>
        <img src={frame2} alt="" />
        <span>Contatos</span>
      </HomeAsideContentItemMenu>
      <HomeAsideContentItemMenu>
        <img src={frame3} alt="" />
        <span>Relatórios</span>
      </HomeAsideContentItemMenu>
      <HomeAsideContentItemMenu>
        <img src={frame2} alt="" />
        <span>Contatos</span>
      </HomeAsideContentItemMenu>
      <HomeAsideContentItemMenu>
        <img src={frame2} alt="" />
        <span>Contatos</span>
      </HomeAsideContentItemMenu>
      <HomeAsideContentItemMenu>
        <img src={frame2} alt="" />
        <span>Contatos</span>
      </HomeAsideContentItemMenu>
    </HomeAsideContentContainer>
  );
};

export default HomeAsideContent;
