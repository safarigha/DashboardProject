import React from "react";
import Header from "@components/headers/header";
import Footer from "@components/footers/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <Header /> */}
      <main className="container mx-auto px-4">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
