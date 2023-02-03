import React from "react";
import { useState, useEffect } from "react";
import Header from "../../components/Income-comp/Header";
import IncomeForm from "../../components/Income-comp/IncomeForm";
import IncomeList from "../../components/Income-comp/IncomeList";

function Tracker() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let temp = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
  }, [income]);
  return (
    <>
      <div className="">
        <Header totalIncome={totalIncome} />
        <IncomeForm income={income} setIncome={setIncome} />
        <IncomeList income={income} setIncome={setIncome} />
      </div>
      {/* <div>
        <TableContainer component={Paper} className="inc-table">
          <h3>Income Details</h3>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Income Description</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Modify</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {incData.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.date}
                  </TableCell>
                  <TableCell>{row.incdesc}</TableCell>
                  <TableCell>{row.amount}</TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => navigate(`/income/edit/${row._id}`)}
                    >
                      <EditIcon color="success" />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => deleteInc(row._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div> */}
    </>
  );
}

export default Tracker;
