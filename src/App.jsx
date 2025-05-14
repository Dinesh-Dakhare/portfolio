import { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <Main />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;