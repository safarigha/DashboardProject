import { Route, Routes } from "react-router-dom";
import Home from "@pages/home/home";
import Layout from "@components/layout/layout";
import Signin from "@pages/signin/signin";
import SignUp from "@pages/signup/signup";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import Weather from "@pages/weather/weather";
import Games from "@pages/games/index";
// import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="*" element={<div>Not Found</div>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/weather"
        element={
          <PrivateRoute>
            <Layout>
              <Weather />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/games"
        element={
          <PrivateRoute>
            <Layout>
              <Games />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
