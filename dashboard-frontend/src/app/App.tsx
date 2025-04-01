import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";
import { toast } from "react-toastify";

const App = () => {
  useEffect(() => {
    const handleOnline = () => toast.success("شما آنلاین هستید");
    const handleOffline = () => toast.error("شما آفلاین هستید");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (!navigator.onLine) {
      toast.error("شما آفلاین هستید");
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
