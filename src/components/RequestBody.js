import React from "react";

const RequestBody = ({ requestBodyHandler }) => {
  return (
    <div className="text">
      <p>Request Body</p>
      <textarea
        onChange={(e) => requestBodyHandler(e.target.value)}
        id="w3review"
        name="w3review"
        rows="55"
        cols="50"
      ></textarea>
    </div>
  );
};

export default RequestBody;
