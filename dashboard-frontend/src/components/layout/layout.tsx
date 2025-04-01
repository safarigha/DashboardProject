import React from "react";
import Header from "@components/headers/header";
import Footer from "@components/footers/footer";
import Sidebar from "@components/sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 flex-row-reverse">
        <main className="flex-1 p-4">{children}</main>
        <Sidebar />
      </div>{" "}
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
