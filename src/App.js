import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Cv from "./pages/Cv";
import NoPage from "./pages/NoPage";
import Navbar from "./Navbar";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cv" element={<Cv />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
