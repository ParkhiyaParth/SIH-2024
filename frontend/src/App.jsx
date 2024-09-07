// Import necessary components from React Router
import { BrowserRouter as Router, Route, Routes, Form ,Navigate } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Explore from "./Component/Explore";
import AboutUs from "./Component/AboutUs";
import SignIn from "./Component/SignIn";
import Register from "./Component/Register";
import Model from "./Component/Model";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import DetailForm from "./Component/DetailForm";

// App.jsx
function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/model" element={<Model />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/Detailform" element={<DetailForm />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
