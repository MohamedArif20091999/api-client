import react from "react";

const SendRequestButton = ({ submitHandler }) => {
  return (
    <div className="submit-btn col s2">
      <button
        className="btn waves-effect waves-light center-align"
        type="submit"
        name="action"
        onClick={(e) => submitHandler()}
      >
        Send
      </button>
    </div>
  );
};

export default SendRequestButton;
