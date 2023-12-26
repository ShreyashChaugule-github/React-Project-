
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header1 from "./components/Header1";
import Home1 from "./components/Home1";
import Footer1 from "./components/Footer1";
import Videos from "./components/Videos";
import Upload1 from "./components/Upload1";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
     <Header1/>
     <Routes>
       <Route path="/" element={<Home1/>} />
       <Route path="/videos" element={<Videos/>} />
       <Route path="/upload1" element={<Upload1/>} />
       <Route path="/login" element={<Login/>} />
       <Route path="/Signup" element={<Signup/>} />
      </Routes>
     <Footer1 />
    </Router>
  );
};

export default App;
