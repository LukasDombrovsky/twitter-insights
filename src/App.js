import NavigationBar from "./components/UI/NavigationBar";
import Home from "./components/sections/Home";
import Section from "./components/UI/Section";
import Insights from "./components/sections/Insights/Insights";
import Contact from "./components/sections/Contact";

import "./App.scss";

import navBrand from "./img/navbar-brand.png";

function App() {
  return (
    <>
      <NavigationBar
        brand={navBrand}
        homeLink="root"
        links={["home", "insights", "contact"]}
        expand="sm"
        fluid
        colors={{
          notScrolled: {
            backgroundColor: "transparent",
            textColor: "rgba(255, 255, 255, 0.7)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
          },
          scrolled: {
            backgroundColor: "white",
            textColor: "#222222",
            borderBottom: "2px solid #0dcaf0",
          },
        }}
        activeTextColor="#0dcaf0"
      />
      <Home id="home" />
      <Section id="insights">
        <Insights className="insights" />
      </Section>
      <Section id="contact" backgroundColor="#222222" narrow-width>
        <Contact />
      </Section>
    </>
  );
}

export default App;
