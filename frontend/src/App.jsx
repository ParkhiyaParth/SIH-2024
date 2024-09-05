// Import necessary components from React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Quotes from "./Component/Quotes";
import SignIn from "./Component/SignIn";
import Register from "./Component/Register";
import Model from "./Component/Model";

// App.jsx
function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Hero />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/model" element={<Model />} />
        </Routes>
        <Quotes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
