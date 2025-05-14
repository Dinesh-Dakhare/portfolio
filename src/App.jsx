import { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-200">
        <Header />
        <Main />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;