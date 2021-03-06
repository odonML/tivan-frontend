import React from "react";

function Navbar({ children }) {
  return (
    <nav className="w-full h-10 px-1 py-2 bg-purple-0 flex items-center justify-center md:justify-start md:h-10 ">
      {children}
    </nav>
  );
}

export default Navbar;
