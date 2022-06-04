import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyled } from "./styles/TropaStyled";
import HomeContent from "./components/HomeContent";
import LoginContent from "./components/LoginContent";
import Footer from "./components/Footer";
import TropaHome from "./pages/TropaHome";
import TropaLogin from "./pages/TropaLogin";

function App() {
  const [user, setUser] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<TropaLogin user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/home"
            element={<TropaHome user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
      <GlobalStyled />
    </>
  );
}

export default App;
