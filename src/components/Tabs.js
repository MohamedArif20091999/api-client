import React from "react";
import M from "materialize-css";
import { useEffect } from "react";

const Tabs = ({ queryParams, addQueryParamField, handleQueryParams }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const renderItems = queryParams.map((queryParam, i) => {
    console.log(queryParam);
    return (
      <div key={i}>
        <div id="test1" className="col s12">
          <div class="input-field col s5">
            <input
              placeholder="key"
              id="first_name"
              type="text"
              class="validate"
              onChange={(e) => handleQueryParams(e.target.value, i, "key")}
            />
          </div>
          <div class="input-field col s5">
            <input
              placeholder="value"
              id="last_name"
              type="text"
              class="validate"
              onChange={(e) => handleQueryParams(e.target.value, i, "value")}
            />
          </div>
          <div className="delete-btn col s1">
            <a class="btn-floating btn-small  waves-effect waves-light grey">
              <i class="material-icons">delete</i>
            </a>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="col s12">
        <ul className="tabs">
          <li className="active tab col s6">
            <a href="#test1">params</a>
          </li>
          <li className="tab col s6">
            <a className="" href="#test2">
              headers
            </a>
          </li>
        </ul>
      </div>
      {renderItems}
      <div>
        <a class="btn-floating btn-small  waves-effect waves-light  right-align">
          <i class="material-icons">add</i>
        </a>
      </div>
      {/* <div className="col s12">
        <ul className="tabs">
          <li className="tab col s6">
            <a href="#test1">params</a>
          </li>
          <li className="tab col s6">
            <a className="active" href="#test2">
              headers
            </a>
          </li>
        </ul>
      </div>
      <div id="test1" className="col s12">
        <div class="input-field col s5">
          <input
            placeholder="key"
            id="first_name"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s5">
          <input
            placeholder="value"
            id="last_name"
            type="text"
            class="validate"
          />
        </div>
        <div className="delete-btn col s1">
          <a class="btn-floating btn-small  waves-effect waves-light grey">
            <i class="material-icons">delete</i>
          </a>
        </div>
      </div>
      <div id="test2" className="col s12">
        <div class="i input-field col s5">
          <input
            placeholder="key"
            id="first_name"
            type="text"
            class="validate"
          />
        </div>

        <div class="input-field col s5">
          <input
            placeholder="value"
            id="last_name"
            type="text"
            class="validate"
          />
        </div>
        <div className="delete-btn col s1">
          <a class="btn-floating btn-small  waves-effect waves-light grey">
            <i class="material-icons">delete</i>
          </a>
        </div>
      </div>
      <div>
        <a class="btn-floating btn-small  waves-effect waves-light  right-align">
          <i class="material-icons">add</i>
        </a>
      </div> */}
    </div>
  );
};

export default Tabs;
