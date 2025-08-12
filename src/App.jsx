import NavBar from "./Components/Nav"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Page/Blog";
import Contact from "./Page/Contact";
import BlogPost from "./Page/BlogPost";
import Hero from "./Components/Hero";
import NotFound from "./Page/NotFound";

function App() {

  return (
    <Router>
        <NavBar />
            <Routes>
               <Route path='/' Component={Hero} />
               <Route path='/blog' Component={Blog} />
               <Route path='/contact' Component={Contact} />
               <Route path='/blog/:id' Component={BlogPost} />
               <Route path='/blogPost/:id' Component={BlogPost} />
               <Route path='*' Component={NotFound} />
            </Routes>
    </Router>
  )
}

export default App
