import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeContent from "../components/HomeContent";

const TropaHome = ({ user, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setUser(true);
      navigate("/");
    }
  }, []);

  return (
    <>
      <HomeContent user={user} setUser={setUser} />
    </>
  );
};

export default TropaHome;
