import React, { useState } from "react";
import SideBar from "@/components/SideBar";
import "./globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-6 md:grid-cols-5">
        <div className="flex flex-col h-full bg-gray-800 p-4">
          <SideBar />
        </div>
        <div className="col-span-4 md:col-span-4">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
