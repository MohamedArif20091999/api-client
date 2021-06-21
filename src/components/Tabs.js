import React from "react";
import M from "materialize-css";
import { useEffect } from "react";

const Tabs = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div className="tab-items">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s3">
            <a href="#test1">params</a>
          </li>
          <li className="tab col s3">
            <a className="active" href="#test2">
              headers
            </a>
          </li>
        </ul>
      </div>
      <div id="test1" className="col s12">
        <div className="ResponseBody">{/* <pre>{resData}</pre> */}</div>
      </div>
      <div id="test2" className="col s12">
        Test2
      </div>
    </div>
  );
};

export default Tabs;
