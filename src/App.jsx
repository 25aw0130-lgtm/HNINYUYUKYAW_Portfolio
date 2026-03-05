import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import ProjectDetails from "./components/ProjectDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/project/:slug" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}