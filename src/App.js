// App.js
import React from 'react';

import './static/scss/app.scss';
import 'react-router-dom';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './Components/Presentation/header.js';
import Footer from './Components/Presentation/footer';
import LandingPage from './Components/Presentation/landingPage';
import GettingStarted from './Components/Presentation/gettingStarted.js';
import Login from './Components/Presentation/login';
import Register from './Components/Presentation/register';
import AboutUs from './Components/Presentation/about';
import Contacts from './Components/Presentation/contact';
import Education from './Components/Presentation/education';
import Finalize from  './Components/Presentation/finalizePage';
import Lp from './Components/Presentation/landingPage';
import PrivateRoute from './Components/PrivateRoute';
import Skill from './Components/Presentation/skills';
import Experience from './Components/Presentation/experience';


function App() {
  return (
    <div>
    


 
     <BrowserRouter>

     <Header></Header> 
   
  
    
   

     <Routes>
      
          <Route exact path="/education"element={<PrivateRoute><Education></Education></PrivateRoute>}></Route>
          <Route exact path="/contact" element={<PrivateRoute><Contacts></Contacts></PrivateRoute>}></Route>
          <Route exact path="/skill" element={<PrivateRoute><Skill></Skill></PrivateRoute>}></Route>
          <Route exact path="/experience" element={<PrivateRoute><Experience></Experience></PrivateRoute>}></Route>
           <Route exact path="/getting-started" element={<PrivateRoute><GettingStarted></GettingStarted></PrivateRoute>}></Route>
          <Route exact path="/resume-templates"element={<PrivateRoute><GettingStarted></GettingStarted></PrivateRoute>}></Route> 
          <Route path="/about-us"    element={<AboutUs></AboutUs>}></Route>
          <Route path="/finalize" element={ <PrivateRoute><Finalize/></PrivateRoute>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route eaxct path="/register" element={<Register></Register>}></Route> 
          <Route exact path="/" element={<LandingPage></LandingPage>}></Route>            

      </Routes>
        <Footer></Footer> 
      </BrowserRouter>
      
    </div>
   
  );
}

export default App;
