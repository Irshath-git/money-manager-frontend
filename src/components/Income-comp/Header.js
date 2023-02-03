import React from "react";

function Header({ totalIncome }) {
  return (
    <header className="mt-5">
      <h1>Income Tracker</h1>
      <div className="total-income">₹{totalIncome}</div>
    </header>
  );
}

export default Header;
