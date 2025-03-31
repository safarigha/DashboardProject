import { Route, Routes } from "react-router-dom";
import Home from "@pages/home/home";
import Layout from "@components/layout/layout";
import Signin from "@/pages/signin/signin";
import SignUp from "./pages/signup/signup";
// import WeatherPage from "../pages/WeatherPage";
// import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="*" element={<div>Not Found</div>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />

      {/* <Route path="/weather" element={<WeatherPage />} />
      <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
