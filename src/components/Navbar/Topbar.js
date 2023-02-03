import React from "react";

function Topbar() {
  return (
    <>
      <div>
        <div className="  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 to-blue-500  text-white">
          <h1 className="text-3xl px-5 py-4 mb-5">Expenso</h1>
        </div>
        <span className="text-gray-400 text-sm">
          Your Daily Expense Tracker
        </span>
      </div>
    </>
  );
}

export default Topbar;
