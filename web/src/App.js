import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Events,
  Gallery,
  Home,
  Navbar,
  Startups,
  Terstimonials,
  Wings,
  StarsCanvas,
  Team,
  Orientation,
  Footer,
} from "./Components";

 import { useState, useEffect } from "react";
 import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function Loader({visible}) {
  return (
    <div 
      className={`fixed top-0 z-[1000] bg-primary w-screen h-screen flex flex-col items-center justify-center ${visible ? '': 'hidden'}`}
    >
      <ClimbingBoxLoader 
       color="#ffffff"
       size={20}
       aria-label="Loading Spinner"
       data-testid="loader"
       /> 
    </div>
  );
}

function App() {
  const [loading, setLoading]=useState(true);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      window.scrollTo(0, 0);
    },2000)
  },[])


  return (
    <div className="App bg-primary overflow-x-clip">
    <Loader visible={loading} />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-0 bg-primary">
              <Navbar />
              <Home />
              <About />
              <Events />
              <Gallery />
              <Startups />
              <Wings />
              <Terstimonials />
              <div className="relative z-0 bg-primary">
                <StarsCanvas />
                <Contact setLoading={setLoading} loading={loading} />
                <Footer />
              </div>
            </div>
          }
        />
          <Route
            path="/team"
            element={
              <div>
                <Navbar />
                {/* <StarsCanvas /> */}
                <Team />
                <Footer />
              </div>
            }
          />
          <Route
            path="/orientation-2k25/:startupId?"
            element={
              <div className="relative z-0">
                <StarsCanvas /> 
                <Orientation />
              </div>
            }
          />
        </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
