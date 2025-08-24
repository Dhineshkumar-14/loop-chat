import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/view/Navbar";
import HomePage from "./pages/view/HomePage";
import LoginPage from "./pages/view/LoginPage";
import ProfilePage from "./pages/view/ProfilePage";
import SignUpPage from "./pages/view/SignUpPage";
import { Toaster } from "react-hot-toast";
import { Fragment, useEffect } from "react";
import { checkAuth } from "./lib/auth.lib";
import Loader from "./pages/view/Loader";

function App() {
  const authUser = useSelector((state) => state.authUser.user);

  const dispatch = useDispatch();
  useEffect(() => {
    checkAuth(dispatch);
  }, []);

  return (
    <Fragment>
      <Loader/>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <LoginPage />} />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <HomePage />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <HomePage />}
        />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <LoginPage />}
        />
      </Routes>
      <Toaster />
    </Fragment>
  );
}

export default App;
