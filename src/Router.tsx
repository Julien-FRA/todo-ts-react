import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import LoginPage from "./components/page/LoginPage";
import RegisterPage from "./components/page/RegisterPage";
import ErrorPage from "./components/page/ErrorPage";
import HomePage from "./components/page/HomePage";
import { useAuth } from "./contexts/authContext";

const ProtectedRoute = ({ children }: any) => {
  const user = useAuth();
  let location = useLocation();

  if (!user?.userLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

const UserLoggedInRoute = ({ children }: any) => {
  const user = useAuth();
  let location = useLocation();

  if (user?.userLoggedIn) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <UserLoggedInRoute>
              <RegisterPage />
            </UserLoggedInRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UserLoggedInRoute>
              <LoginPage />
            </UserLoggedInRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
