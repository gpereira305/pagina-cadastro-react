import React from "react";
import {
  HomeContentMainGridItem,
  HomeContentMainGridItemBadge,
  HomeContentMainGridItemInner,
} from "../styles/TropaStyled";

const HomeContentGrid = ({ img, title, text_content }) => {
  return (
    <HomeContentMainGridItem>
      <HomeContentMainGridItemInner>
        <HomeContentMainGridItemBadge>
          <span className="material-icons">calendar_month</span>
          <small>2 min atrás</small>
        </HomeContentMainGridItemBadge>
        <img src={img} alt="" />
        <p>{title}</p>
        <small>{text_content}</small>
      </HomeContentMainGridItemInner>
    </HomeContentMainGridItem>
  );
};

export default HomeContentGrid;
