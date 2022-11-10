import React from "react";
import CompanyLogos from "./Components/CompanyLogos/CompanyLogos";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Navbar/NavBar";
const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <CompanyLogos />
    </div>
  );
};

export default App;
