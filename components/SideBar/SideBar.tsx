import React from "react";

interface SideBarProps {
  children: React.ReactNode;
}

export default function SideBar({ children }: SideBarProps) {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-12 md:w-16 m-0 z-10
                    flex flex-col
                    bg-gray-900 shadow-lg"
    >
      {children}
    </div>
  );
};
