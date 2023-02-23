import React,{useEffect} from 'react'
import {
  BrowserRouter,
Route,
HashRouter,
  Routes,
  useLocation
} from "react-router-dom";

import About from './Pages/About';
import Form from './Pages/Form';
import Home from './Pages/Home';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Properties from './Pages/Properties';
import Property from './Pages/Property';
import TermsandCondition from './Pages/TermsandCondition';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}   />
        <Route exact path="/ourstory" element={<About/>}   />
          <Route exact path="/property/:id" element={<Property/>}   />
          <Route exact path="/form" element={<Form/>}   />
          <Route exact path="/properties" element={<Properties/>}   />
          <Route exact path="/termsandcondition" element={<TermsandCondition/>}   />
          <Route exact path="/onboardingpolicy" element={<PrivacyPolicy/>}   />
      </Routes>
    </div>
  );
}

export default App;
