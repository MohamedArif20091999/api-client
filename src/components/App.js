import React from "react";
import { useState, useEffect } from "react";
import RequestType from "./RequestType";
import UrlField from "./UrlField";
import ResponseBody from "./ResponseBody";
import Tabs from "./Tabs";

import axios from "axios";

import "./main.css";
const App = () => {
  const [requestType, setRequestType] = useState("get");
  const [reqUrl, setReqUrl] = useState("");
  const [resData, setResData] = useState("Nothing to show :(");
  const [queryParams, setQueryParams] = useState([
    { key: "", value: "" },
    { key: "", value: "" },
  ]);

  // useEffect(() => {}, [setRequestType]);

  const handleRequestType = (reqType) => {
    setRequestType(reqType);
  };

  const handleUrl = (url) => {
    setReqUrl(url);
  };

  const handleSendRequest = async () => {
    console.log(requestType);
    console.log(reqUrl);
    let { data } = await axios.get(`${reqUrl}`);
    console.log(JSON.stringify(data, null, 2));
    setResData(JSON.stringify(data, null, 2));
  };

  const handleQueryParams = (data, index, property) => {
    console.log(data, index, property);
    // console.log(queryParams.map((p) => p));
    setQueryParams(
      queryParams.map((param, i) =>
        i === index ? { ...param, [property]: data } : param
      )
    );
  };

  const addQueryParamField = () => {
    // setQueryParams([...queryParams, { key: "onw", value: "onwvalue" }]);
  };

  return (
    <div className="container row">
      <div className="req-details">
        <h5>
          Send a {requestType.toUpperCase()} request to <a>{reqUrl}</a>
        </h5>
        <h1>KEY: {queryParams[0].key}</h1>
        <h1>VALUE: {queryParams[0].value}</h1>
      </div>
      <RequestType reqTypeHandler={handleRequestType}></RequestType>
      <UrlField
        submitHandler={handleSendRequest}
        urlHandler={handleUrl}
      ></UrlField>
      <div className="sub-container">
        <div className="sub-container align-center">
          <div className="float-child">
            <ResponseBody resData={resData}></ResponseBody>
          </div>
          <div className="float-child child-1">
            <Tabs
              handleQueryParams={handleQueryParams}
              queryParams={queryParams}
              addQueryParamField={addQueryParamField}
            ></Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
