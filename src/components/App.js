import React from "react";
import { useState, useEffect } from "react";
import RequestType from "./RequestType";
import UrlField from "./UrlField";
import SendRequestButton from "./SendRequestButton";
import ResponseBody from "./ResponseBody";
import Tabs from "./Tabs";
import RequestBody from "./RequestBody";
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
  const [requestBody, setRequestBody] = useState("");

  const handleRequestType = (reqType) => {
    setRequestType(reqType);
  };

  const handleUrl = (url) => {
    setReqUrl(url);
  };

  const handleSendRequest = async () => {
    let params = {};
    let headers = {};
    for (let i of queryParams) {
      params[i.key] = i.value;
    }
    for (let i of headerParams) {
      headers[i.key] = i.value;
    }
    let reqBody = requestBody;
    console.log({
      method: requestType,
      url: reqUrl,
      params: params,
      headers: headers,
      data: reqBody,
    });

    let { data } = await axios({
      method: requestType,
      url: reqUrl,
      data: reqBody,
      // params: params,
      // headers: headers,
    });
    setResData(JSON.stringify(data, null, 2));
  };

  const handleQueryParams = (data, index, property) => {
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
    setQueryParams(queryParams.filter((param, i) => i !== index));
  };

  const handleHeaderParams = (data, index, property) => {
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
    setHeaderParams(headerParams.filter((param, i) => i !== index));
  };

  const requestBodyHandler = (body) => {
    setRequestBody(body);
    // console.log(body);
  };

  return (
    <div>
      <div className="container row">
        <div className="req-details">
          <h5>
            Send a <a>{requestType.toUpperCase()}</a> request to <a>{reqUrl}</a>
          </h5>
          {/* <h1>requestBody: {requestBody}</h1> */}
        </div>
        <div className="row">
          <RequestType reqTypeHandler={handleRequestType}></RequestType>
          <UrlField urlHandler={handleUrl}></UrlField>
          <SendRequestButton
            submitHandler={handleSendRequest}
          ></SendRequestButton>
        </div>
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
              <RequestBody
                requestBodyHandler={requestBodyHandler}
              ></RequestBody>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-container">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="content">Made with react</p>
        </div>
      </div>
    </div>
  );
};

export default App;
