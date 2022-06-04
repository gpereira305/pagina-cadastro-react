import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/images/logo.png";
import { mock_data } from "../data";
import {
  HomeContentContainer,
  HomeContentHeader,
  HomeContentAside,
  HomeContentMain,
  HomeContentHeaderTitle,
  HomeContentMainGrid,
  HomeContentAsideInner,
  HomeContentAsideLogo,
  HomeContentAsideMenus,
} from "../styles/TropaStyled";
import HomeAsideContent from "./HomeAsideContent";
import HomeContentGrid from "./HomeContentGrid";

const HomeContent = () => {
  return (
    <HomeContentContainer>
      <HomeContentMain>
        <HomeContentMainGrid>
          {mock_data.map(({ img, title, text_content, id }) => (
            <HomeContentGrid
              key={id}
              img={img}
              title={title}
              text_content={text_content}
            />
          ))}
        </HomeContentMainGrid>
      </HomeContentMain>

      <HomeContentAside>
        <HomeContentAsideInner>
          <HomeContentAsideLogo>
            <Link to={"/"}>
              <img src={logo} alt="Logo" title="Logo | Home" />
            </Link>
          </HomeContentAsideLogo>

          <HomeContentAsideMenus>
            <HomeAsideContent />
          </HomeContentAsideMenus>
        </HomeContentAsideInner>
      </HomeContentAside>

      <HomeContentHeader>
        <HomeContentHeaderTitle>
          <h1>
            Olá <span>Usuário</span>
          </h1>
        </HomeContentHeaderTitle>
        <span></span>
      </HomeContentHeader>
    </HomeContentContainer>
  );
};

export default HomeContent;
