import React from "react";
import "./App.css";
import { ThemeContext } from "./Context/theme";
import { About } from "./Pages/About/About";
import { Projects } from "./Pages/Projects/Projects";
import { Contact } from "./Pages/Contact/Contact";
import { Footer } from "./Pages/Footer/Footer";
import { ScrollToTop } from "./Pages/ScrollToTop/ScrollToTop";
import { Header } from "./Pages/Header/Header";

export default function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <div id="top" className={`${themename} app`}>
      <section id="#home">
        <Header />
      </section>
      <main>
        <About />
        <section id="#projects">
          <Projects />
        </section>
        <section id="#contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
