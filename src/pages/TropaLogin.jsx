import React from "react";
import LoginContent from "../components/LoginContent";

const TropaLogin = ({ user, setUser }) => {
  return (
    <>
      <LoginContent user={user} setUser={setUser}/>
    </>
  );
};

export default TropaLogin;
