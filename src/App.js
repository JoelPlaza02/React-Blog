import React from 'react';

// Import react router DOM
import { Routes, Route } from 'react-router-dom';

// importing css
import './App.css';
import './components/styles/comment.css';

// importing components
import Home from './components/Home';
import BlogOneDetails from './components/BlogOneDetails';
import BlogTwoDetails from './components/BlogTwoDetails';
import BlogThreeDetails from './components/BlogThreeDetails';
import BlogFourDetails from './components/BlogFourDetails';
import BlogFiveDetails from './components/BlogFiveDetails';

function App() {

   return(
      <div className='App'>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blogonedetails" element={<BlogOneDetails />} />
                  <Route path="/blogtwodetails" element={<BlogTwoDetails />} />
                  <Route path="/blogthreedetails" element={<BlogThreeDetails />} />
                  <Route path="/blogfourdetails" element={<BlogFourDetails />} />
                  <Route path="/blogfivedetails" element={<BlogFiveDetails />} />
               </Routes>
      </div>
    );  
 }
   
   export default App;