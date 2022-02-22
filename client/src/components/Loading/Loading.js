import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="row d-flex justify-content-center p-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
