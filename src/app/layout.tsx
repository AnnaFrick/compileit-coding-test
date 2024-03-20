import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="grid md:grid-cols-6 h-screen">
        <div className="col-span-1 md:col-span-1">
          <SideBar />
        </div>
        <div className="md:col-span-5">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
