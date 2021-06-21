import React from "react";
import { useEffect } from "react";
import M from "materialize-css";

const RequestType = () => {
  useEffect(() => {
    console.log(M);

    M.AutoInit();
  }, []);
  return (
    <div className="container">
      <div className="input-field row">
        <select
          className="col s2"
          onChange={(e) => console.log(e.target.value)}
        >
          <option value="" disabled selected>
            Choose your option
          </option>
          <option value="get">Get</option>
          <option value="post">Post</option>
          <option value="put">Put</option>
          <option value="patch">Patch</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </div>
  );
};

export default RequestType;
