import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Labels from "../Labels/Labels";
import { chart_Data, getTotal } from "../../Helper/Helper";
import { default as api } from "../../Store/apiSlice";

Chart.register(ArcElement);

function Graphchart() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery();
  let graphData;

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <>
      <div className="flex justify-content max-w-xs mx-auto ">
        <div className="item ">
          <div className="chart relative">
            {graphData}
            <h3 className="mb-4 font-bold title absolute mx-auto ">
              TOTAL
              <span className="block text-3xl text-emerald-400">
                ₹{getTotal(data)}
              </span>
            </h3>
          </div>
          <div className="flex flex-col py-10 gap-4">
            <Labels />
          </div>
        </div>
      </div>
    </>
  );
}

export default Graphchart;
