import NavigationBar from "../src/UI/NavigationBar";
import Header from "../src/components/Header";
import Section from "../src/UI/Section";
import Insights from "../src/components/Insights";
import Footer from "../src/components/Footer";

import "./App.scss";

import navBrand from "../src/img/navbar-brand.png";

function App() {
  return (
    <>
      <NavigationBar
        brand={navBrand}
        homeLink="root"
        links={["Insights"]}
        expand={true}
        colors={{
          static: {
            backgroundColor: "transparent",
            textColor: "rgba(255, 255, 255, 0.7)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.3)"
          },
          dynamic: { backgroundColor: "white", textColor: "#222222", borderBottom: "2px solid #0dcaf0" },
        }}
      />
      <Header id="home" />
      <Section id="Insights">
        <Insights className="insights" />
      </Section>
      <Footer />
    </>
  );
}

export default App;
