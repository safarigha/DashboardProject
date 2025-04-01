import { Navigate } from "react-router-dom";
import { JSX, useEffect, useState } from "react";
import userService from "@/services/userService";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        await userService.checkAuth();
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      } finally {
        setLoading(false);
      }
    };

    check();
  }, []);

  if (loading) return <div>در حال بررسی وضعیت ورود...</div>;
  return isAuth ? children : <Navigate to="/signin" replace />;
};
export default PrivateRoute;
