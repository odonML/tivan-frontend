import React from "react";

function Navbar({ children }) {
  return (
    <nav className="w-full p-1 bg-purple-0 flex items-center justify-between md:justify-start ">
      {children}
    </nav>
  );
}

export default Navbar;
