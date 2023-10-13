import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Navbar,
  Works,
  StarsCanvas,
  Tech,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="realtive z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
        <Navbar />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
