import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="w-1/3 mx-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400 to-blue-500   rounded-full my-5 flex justify-center content-center">
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p className="text-white font-bold">
            You can add and remove your income by hover the list
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button
              className="bg-red-600 my-1 p-0.5 rounded-xl text-white font-bold"
              onClick={() => setShow(false)}
              variant="outline-success"
            >
              Close
            </Button>
          </div>
        </Alert>
      </div>
    </>
  );
}

export default AlertDismissible;
