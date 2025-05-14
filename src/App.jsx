import { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";

function App() {
  

  return (
    <div id="main" className="sm:overflow-hidden">
      <Header />
      <Main />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
