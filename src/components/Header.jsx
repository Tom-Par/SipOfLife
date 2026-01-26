import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="container headerInner">
        <div className="brand">SipOfLife</div>
        <nav className="nav" aria-label="Primary">
          <a href="#travel">Travel</a>
          <a href="#coffee">Coffee</a>
          <a href="#music">Music</a>

        </nav>
      </div>
    </header>
  );
}

export default Header;