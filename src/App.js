import React, { Suspense, lazy } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const LandingPage = lazy(() => import("./Components/LandingPage"));
const Finance = lazy(()=>import('./Components/Finance'));
const Logistics = lazy(()=>import('./Components/Logistics'));
const Technology = lazy(()=>import('./Components/Technology'));
const PublicSector = lazy(()=>import('./Components/PublicSector'));
const Health = lazy(()=>import('./Components/Health'))
const Retail = lazy(()=>import('./Components/Retail'))
const Education = lazy(()=>import('./Components/Education'))
const Consumer = lazy(()=>import('./Components/Consumer'))
const Energy = lazy(()=>import('./Components/Energy'))
const AutoMotive = lazy(()=>import('./Components/AutoMotive'))
const Insurance = lazy(()=>import('./Components/Insurance'))
const Entertainment = lazy(()=>import('./Components/Entertainment'))
const TravelAndTurisum = lazy(()=> import('./Components/TravelAndTurisum'))
function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="/Finance" element = {<Finance/>} />
          <Route path="/Logistics" element = {<Logistics/>} />
          <Route path="/Technology" element = {<Technology/>}/>
          <Route path="/PublicSector" element = {<PublicSector/>} />
          <Route path="/Health" element = {<Health/>} />
          <Route path="/Retail" element = {<Retail/>} />
          <Route path="/Education" element = {<Education/>} />
          <Route path="/Consumer" element = {<Consumer/>} />
          <Route path="/Energy" element = {<Energy/>} />
          <Route path="/AutoMotive" element = {<AutoMotive/>} />
          <Route path="/Insurance" element = {<Insurance/>} />
          <Route path="/Entertainment" element = {<Entertainment/>} />
          <Route path='/TravelAndTurisum' element = {<TravelAndTurisum/>} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
