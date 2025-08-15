import "./App.css";
import { BrowserRouter, Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">app</div>
      <Routes>
        <Router path="/" element={<HomePage />} />
        <Router path="/signup" element={<SignUpPage />} />
        <Router path="/login" element={<LoginPage />} />
        <Router path="/settings" element={<SettingsPage />} />
        <Router path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
