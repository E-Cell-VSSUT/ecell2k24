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

function App() {

  const [loading,setLoading]=useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000)
  },[])


  return (
    <div className="App bg-primary overflow-x-clip">
    {loading ? 
    <div className="flex justify-center items-center text-center bg-primary w-full h-screen">
         <ClimbingBoxLoader 
         color="#ffffff"
         size={20}
         aria-label="Loading Spinner"
         data-testid="loader"
         /> 
         </div>
         : 
       <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative z-0 bg-primary">
                <Navbar />
                <StarsCanvas />
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
                </div>
                <Footer />
              </div>
            }
          />
          <Route
            path="/team"
            element={
              <div>
                <Navbar />
                <StarsCanvas />
                <Team /> 
                <Footer />
              </div>
            }
          />
          <Route
            path="/orientation-2k25/:startupId?"
            element={
              <div>
                <Navbar />
                <Orientation />
              </div>
            }
          />
        </Routes>
    </BrowserRouter>
}
    </div>
  );
}

export default App;
