import NavBar from "./Components/Nav"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import BlogPost from "./page/BlogPost";
import Hero from "./Components/Hero";

function App() {
const [count, SetCount] = useState(0);

  return (
    <Router>
        <NavBar />
            <Routes>
               <Route path='/' Component={<Hero />} />
               <Route path='/blog' Component={<Blog />} />
               <Route path='/contact' Component={<Contact />} />
               <Route path='/blog/:id' Component={<BlogPost />} />
            </Routes>
    </Router>
  )
}

export default App
