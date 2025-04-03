import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";
import { toast } from "react-toastify";
import { setLoadingHandler } from "@/services/api";
import { useLoading } from "@/context/loadingContext";

const App = () => {
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoadingHandler(setLoading);
  }, [setLoading]);

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
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-white/70 backdrop-blur-sm flex items-center justify-center">
          <div className="relative size-26">
            <div className="absolute inset-0 rounded-full border-6 border-dashed border-blue-500 animate-spin"></div>
            <div className="absolute inset-3 rounded-full"></div>
          </div>
        </div>
      )}

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default App;
