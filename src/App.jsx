import NavBar from "./Components/Nav"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Page/Blog";
import Contact from "./Page/Contact";
import BlogPost from "./Page/BlogPost";
import Hero from "./Components/Hero";

function App() {

  return (
    <Router>
        <NavBar />
            <Routes>
               <Route path='/' Component={Hero} />
               <Route path='/blog' Component={Blog} />
               <Route path='/contact' Component={Contact} />
               <Route path='/blog/:id' Component={BlogPost} />
            </Routes>
    </Router>
  )
}

export default App
