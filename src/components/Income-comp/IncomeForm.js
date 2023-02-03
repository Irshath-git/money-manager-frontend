import React, { useRef } from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/81952-financial-income.json";
import AlertDismissible from "../Alert";

function IncomeForm({ income, setIncome }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const AddIncome = (e) => {
    e.preventDefault();
    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1] - 1, d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);

    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <>
      <AlertDismissible />
      <div className="hidden md:block lg:block">
        <Lottie options={defaultOptions} height={200} width={400} />
      </div>
      <form className="income-form w-[90%] mx-auto" onSubmit={AddIncome}>
        <div className="form-inner border">
          <input
            type="text"
            name="desc"
            placeholder="Income Description.."
            className=" border"
            ref={desc}
          />
          <input
            type="number"
            name="price"
            className=" border"
            placeholder="Income"
            ref={price}
          />
          <input
            type="date"
            name="date"
            placeholder="Income Date.."
            className=" border"
            ref={date}
          />
          <input type="submit" value="Add Income" />
        </div>
      </form>
    </>
  );
}

export default IncomeForm;
