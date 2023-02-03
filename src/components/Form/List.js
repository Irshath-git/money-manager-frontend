import React from "react";
import "boxicons";
import { default as api } from "../../Store/apiSlice";

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  const [deleteTransactions] = api.useDeleteTransactionsMutation();
  let Transactions;

  const handlerClick = (e) => {
    if (!e.target.dataset.id) return 0;
    deleteTransactions({ _id: e.target.dataset.id });
  };

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = data.map((v, i) => (
      <TransactionList
        key={i}
        category={v}
        handler={handlerClick}
      ></TransactionList>
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {Transactions}
    </div>
  );
}

function TransactionList({ category, handler }) {
  if (!category) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r transition ease-in-out delay-150 cursor-pointer hover:-translate-y-1 hover:scale-110"
      style={{ borderRight: `8px solid ${category.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3" onClick={handler}>
        <box-icon
          name="trash"
          size="15px"
          data-id={category._id ?? ""}
          color={category.color ?? "#e5e5e5"}
        ></box-icon>
      </button>
      <span className="block w-full">{category.name}</span>
    </div>
  );
}
