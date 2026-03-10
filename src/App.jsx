import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ProfilePage from "./components/ProfilePage";
import ProjectDetails from "./components/ProjectDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;