import React from "react";

const UrlField = ({ urlHandler, submitHandler }) => {
  return (
    <div className="c-2 col s8">
      <div className="input-field ">
        <input
          autoComplete="off"
          placeholder="Add url here"
          id="url"
          type="text"
          onChange={(e) => urlHandler(e.target.value)}
        />
        <label htmlFor="url">URL</label>
      </div>
      {/* <div className="">
        <button
          className="btn waves-effect waves-light center-align"
          type="submit"
          name="action"
          onClick={(e) => submitHandler()}
        >
          Send
        </button>
      </div> */}
    </div>
  );
};

export default UrlField;
