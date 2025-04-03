import React, { createContext, useContext, useState } from "react";

interface LoadingContextProps {
  loading: boolean;
  setLoading: (state: boolean) => void;
}

const LoadingContext = createContext<LoadingContextProps | undefined>(
  undefined
);

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context)
    throw new Error("useLoading باید داخل LoadingProvider استفاده شود");
  return context;
};
