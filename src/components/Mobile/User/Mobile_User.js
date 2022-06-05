import React from "react";

const Mobile_User = ({ counter, handleInc, handleDec }) => {
  return (
    <div>
      <h1>User For Mobile</h1>
      <h>{counter}</h>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default Mobile_User;
