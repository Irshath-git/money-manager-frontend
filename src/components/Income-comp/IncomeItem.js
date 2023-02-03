import React from "react";

function IncomeItem({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  const removeHandle = (i) => {
    removeIncome(i);
  };
  return (
    <div className="income-item shadow-xl">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        x
      </button>
      <div className="desc border">{income.desc}</div>
      <div className="price border">₹{income.price}</div>
      <div className="date border">{day + "/" + month + "/" + year}</div>
    </div>
  );
}

export default IncomeItem;
