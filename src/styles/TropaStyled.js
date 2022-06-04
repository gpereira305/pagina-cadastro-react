import styled, { createGlobalStyle } from "styled-components";

//   GLOBAL SETTINGS
export const GlobalStyled = createGlobalStyle`
* {
  margin: 0;
  text-decoration: none;
  list-style: none;
  font-weight: normal; 
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  font-family:  var(--roboto) 
}

:root {
  --main: #ff6c22;
  --secondary: #e5e5e5;
  --button-bg: #2eafb2;
  --white: #fff;
  --dark-gray: rgba(0, 0, 0, 0.44);
  --light-gray: rgba(0, 0, 0, 0.1);

  --roboto: 'Roboto', sans-serif;
  --advent: 'Advent Pro', sans-serif;
  --radius: 6px;
}
`;

//   LOGIN PAGE
export const LoginWrapper = styled.section`
  display: flex;
  justify-content: center;
  height: 94vh;
  align-items: center;
  padding: 0 3%;
  background-color: var(--main);
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 857px;
  width: 100%;
  height: 512px;
  background-color: var(--white);
  border-radius: var(--radius);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  @media (max-width: 790px) {
    width: 85%;
  }
`;

export const LoginContentInput = styled.div`
  flex: 1;
  width: 100%;
  height: -webkit-fill-available;
  background-color: #fdfdfd;
  padding: 60px;
  border-radius: 5px 0 0 5px;

  @media (max-width: 790px) {
    border-radius: var(--radius);
  }
  @media (max-width: 490px) {
    padding: 60px 30px;
  }
`;

export const LoginContentImage = styled.div`
  @media (max-width: 790px) {
    display: flex;
    justify-content: center;
  }
`;

export const LoginContentImageImg = styled.img`
  @media (max-width: 490px) {
    width: 75%;
  }
`;

export const LoginContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: center;

  @media (max-width: 790px) {
    align-items: center;
  }
`;

export const LoginContentTitle = styled.div`
  margin: 25px 0;

  > h2 {
    color: var(--dark-gray);
    font-weight: 700;
    font-family: var(--advent);

    > span {
      color: var(--main);
      font-weight: 700;
    }
  }
`;

export const LoginContentInputForm = styled.form`
  display: flex;
  flex-direction: column;

  @media (max-width: 790px) {
    width: 85%;
  }
`;

export const LoginContentInputField = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 34px;
  padding: 5px 10px;
  outline: none;
  border-radius: var(--radius);
  font-size: 0.9rem;
  transition: all ease 0.4s;
  color: var(--dark-gray);

  &:focus {
    border: 1px solid var(--main);
  }
  &::placeholder {
    font-family: var(--advent);
    font-weight: 400;
    font-size: 0.85rem;
  }
`;

export const LoginContentButton = styled.button`
  background-color: var(--button-bg);
  border: none;
  color: var(--white);
  font-family: var(--roboto);
  font-weight: 700;
  font-size: 14px;
  width: 151px;
  height: 40px;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all ease 0.4s;

  &:hover {
    filter: brightness(0.9);
  }

  @media (max-width: 620px) {
    width: 100%;
  }
`;

export const LoginContentBg = styled.div`
  flex: 1;
  width: 100%;
  height: -webkit-fill-available;
  padding: 60px;
  border-radius: 0 5px 5px 0;
  position: relative;

  @media (max-width: 790px) {
    display: none;
  }

  @media (max-width: 490px) {
    padding: 30px;
  }
`;

export const LoginContentBgImageBg = styled.img`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
`;
export const LoginContentBgImageNote = styled.img`
  position: absolute;
  right: 11%;
  bottom: 0;

  @media (max-width: 836px) {
    right: 0;
    width: 100%;
  }
`;

export const LoginMessage = styled.span`
  color: #ff0000;
  font-size: 0.6rem;
  min-height: 20px;
  font-weight: 500;
  letter-spacing: 1.3px;
  font-family: var(--roboto);
`;

//   LOGIN PAGE
export const HomeContentContainer = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr;
  grid-template-rows: 0.5fr 1.8fr 1fr;
  grid-template-areas:
    "aside header header"
    "aside main main"
    "aside main main";
  height: 94vh;
  background-color: var(--secondary);

  @media (max-width: 780px) {
    height: auto;
    grid-template-rows: 0.5fr 5.8fr 1fr;
  }
`;

export const HomeContentHeader = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
  padding: 0 40px;

  > span {
    width: 100%;
    height: 1px;
    background-color: var(--light-gray);
    display: flex;
  }
`;

export const HomeContentHeaderTitle = styled.div`
  display: flex;
  align-self: flex-start;
  font-family: var(--advent);

  > h1 {
    font-weight: normal;
    color: var(--dark-gray);
    > span {
      font-weight: 700;
    }
  }
`;

export const HomeContentAside = styled.aside`
  grid-area: aside;
  background-color: var(--white);
  min-width: 190px;

  @media (max-width: 580px) {
    min-width: 150px;
  }
`;

export const HomeContentAsideInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 780px) {
    height: 60%;
  }
`;

export const HomeContentAsideLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex: 1;

  a {
    > img {
      max-width: 130px;

      @media (max-width: 890px) {
        width: 100px;
      }
    }
  }
`;

export const HomeAsideContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 48%;
  width: 85%;
  min-height: 45vh;

  @media (max-width: 780px) {
    width: 95%;
    height: 55%;
  }

  @media (max-width: 420px) {
    height: 65%;
  }
`;

export const HomeContentAsideMenus = styled.div`
  flex: 7;
  display: flex;
  justify-content: end;
  margin-top: 50px;

  @media (max-width: 780px) {
    flex: 10;
  }
`;

export const HomeAsideContentItemMenu = styled.div`
  background-color: var(--button-bg);
  border-radius: var(--radius);
  cursor: pointer;
  margin-right: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: var(--white);
  transition: all ease 0.3s;
  font-family: var(--advent);
  font-weight: 600;

  &:hover {
    filter: brightness(0.9);
  }

  > span {
    margin-left: 8px;
  }

  &:first-of-type {
    background-color: var(--secondary);
    border-radius: 6px 0 0 6px;
    margin-right: 0px;

    > span {
      color: #000000;
      font-weight: 700;
    }

    &:hover {
      filter: brightness(100%);
    }
  }
`;

export const HomeContentMain = styled.main`
  grid-area: main;
  padding: 0 40px;

  @media (max-width: 890px) {
    padding: 0 15px;
  }
`;

export const HomeContentMainGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 0;
  margin-bottom: 5%;

  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const HomeContentMainGridItem = styled.li`
  width: 100%;
  background-color: var(--white);
  border-radius: var(--radius);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3%);
  }
`;

export const HomeContentMainGridItemInner = styled.div`
  position: relative;
  padding: 15px 15px 20px;
  margin: 0;
  font-family: var(--advent);
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 10px;
  border-radius: var(--radius);

  > img {
    width: 100%;
  }

  > p {
    font-size: 14px;
    font-weight: 700;
    margin-top: 10px;
  }

  small {
    font-size: 12px;
  }
`;

export const HomeContentMainGridItemBadge = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(0 0 0 / 50%);
  right: 30px;
  top: 30px;
  border-radius: var(--radius);
  color: var(--white);
  padding: 4px 22px 4px 5px;

  > span {
    font-size: 20px;
  }

  > small {
    font-size: 11px;
    font-family: var(--advent);
    font-weight: 300;
    margin-left: 5px;
  }
`;
