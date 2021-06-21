import React from "react";
import { useState, useEffect } from "react";
import RequestType from "./RequestType";

const App = () => {
  const [requestType, setRequestType] = useState("Hello");
  useEffect(() => {
    console.log(setRequestType);
  }, [setRequestType]);
  const handleRequestType = (reqType) => {
    setRequestType(reqType);
  };

  return (
    <div className="container">
      <h2>{requestType}</h2>
      <RequestType reqTypeHandler={handleRequestType}></RequestType>
    </div>
  );
};

export default App;
