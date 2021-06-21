import React from "react";

const ResponseBody = ({ resData }) => {
  return (
    <div>
      <h5>
        Response<span>&#128071;&#127995;</span>{" "}
      </h5>
      <div className="ResponseBody">
        <pre>{resData}</pre>
      </div>
    </div>
  );
};

export default ResponseBody;
