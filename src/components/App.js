import React from "react";
import { useState, useEffect } from "react";
import RequestType from "./RequestType";
import UrlField from "./UrlField";
import ResponseBody from "./ResponseBody";
import Tabs from "./Tabs";
import logo from "./logo.svg";
import "./css/App.css";

import axios from "axios";

import "./main.css";
const App = () => {
  const [requestType, setRequestType] = useState("get");
  const [reqUrl, setReqUrl] = useState("");
  const [resData, setResData] = useState("Nothing to show :(");
  const [queryParams, setQueryParams] = useState([{ key: "", value: "" }]);
  const [headerParams, setHeaderParams] = useState([{ key: "", value: "" }]);

  const handleRequestType = (reqType) => {
    setRequestType(reqType);
  };

  const handleUrl = (url) => {
    setReqUrl(url);
  };

  const handleSendRequest = async () => {
    console.log(requestType);
    console.log(reqUrl);
    // let { data } = await axios.get(`${reqUrl}`);
    console.log(queryParams);
    let params = {};
    let headers = {};
    for (let i of queryParams) {
      params[i.key] = i.value;
    }
    for (let i of headerParams) {
      headers[i.key] = i.value;
    }
    console.log({
      method: requestType,
      url: reqUrl,
      params: params,
      headers: headers,
    });

    let { data } = await axios({
      method: requestType,
      url: reqUrl,
      params: params,
      headers: headers,
    });
    console.log(JSON.stringify(data, null, 2));
    setResData(JSON.stringify(data, null, 2));
  };

  const handleQueryParams = (data, index, property) => {
    console.log(data, index, property);
    setQueryParams(
      queryParams.map((param, i) =>
        i === index ? { ...param, [property]: data } : param
      )
    );
  };

  const addQueryParamField = () => {
    let newParams = { key: "", value: "" };
    setQueryParams([...queryParams, newParams]);
  };

  const removeQueryParam = (index) => {
    console.log(index);
    setQueryParams(queryParams.filter((param, i) => i !== index));
  };

  const handleHeaderParams = (data, index, property) => {
    console.log(data, index, property);
    setHeaderParams(
      headerParams.map((param, i) =>
        i === index ? { ...param, [property]: data } : param
      )
    );
  };

  const addHeaderParamField = () => {
    let newParams = { key: "", value: "" };
    setHeaderParams([...headerParams, newParams]);
  };

  const removeHeaderParam = (index) => {
    console.log(index);
    setHeaderParams(headerParams.filter((param, i) => i !== index));
  };

  return (
    <div>
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="content">Made with react</p>
      </div>
      <div className="container row">
        <div className="req-details">
          <h5>
            Send a {requestType.toUpperCase()} request to <a>{reqUrl}</a>
          </h5>
          {/* <h1>KEY: {queryParams.length}</h1> */}
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
                handleHeaderParams={handleHeaderParams}
                removeHeaderParam={removeHeaderParam}
                addHeaderParamField={addHeaderParamField}
                headerParams={headerParams}
                removeQueryParam={removeQueryParam}
                handleQueryParams={handleQueryParams}
                queryParams={queryParams}
                addQueryParamField={addQueryParamField}
              ></Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
