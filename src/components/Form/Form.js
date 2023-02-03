import React from "react";
import List from "./List";
import { useForm } from "react-hook-form";
import { default as api } from "../../Store/apiSlice";

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionsMutation();

  const onSubmit = async (data) => {
    if (!data) {
      return {};
    }
    await addTransaction(data).unwrap();
    resetField("name");
    resetField("amount");
  };

  return (
    <div className="form max-w-sm mx-auto w-96 p-4">
      <h1 className="font-bold pb-4 text-xl">Transactions</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("name")}
              placeholder="Eg.salary, House Rent, Petrol, Stock "
              className="form-input"
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option defaultValue={true}>select Category</option>
            <option value="Savings">Savings</option>
            <option value="Investment">Investment</option>
            <option value="Expense">Expense</option>
          </select>
          {/* <select className="form-input" {...register("type")}>
            <option defaultValue={true}>select Category</option>
            <option value="office">Office</option>
            <option value="personal">Personal</option>
          </select> */}
          <div className="input-group">
            <input
              type="text"
              {...register("amount")}
              placeholder="Amount"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full hover:bg-indigo-700 rounded-full">
              Make Transactions
            </button>
          </div>
        </div>
      </form>
      <List />
    </div>
  );
}
