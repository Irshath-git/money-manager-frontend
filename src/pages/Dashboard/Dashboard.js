import React from "react";
import Chart from "../../components/Charts/Graphchart";
import Form from "../../components/Form/Form";

function Dashboard() {
  return (
    <>
      {/* grid col */}
      <div className="grid md:grid-cols-2 gap-4">
        <Chart />
        <Form />
      </div>
    </>
  );
}

export default Dashboard;
