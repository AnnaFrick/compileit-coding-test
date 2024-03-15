import React from "react";
import SideBar from "@/components/SideBar";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <SideBar />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
