import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/view/HomePage";
import SignUpPage from "./pages/view/SignUpPage";
import LoginPage from "./pages/view/LoginPage";
import SettingsPage from "./pages/view/SettingsPage";
import ProfilePage from "./pages/view/ProfilePage";
import Navbar from "./components/view/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>app</div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
