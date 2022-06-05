import React from "react";
import { useState } from "react";

import User from "../../components/Desktop/User/User";
import Mobile_User from "../../components/Mobile/User/Mobile_User";

const Index = ({ isMobile }) => {
  const [counter, setCounter] = useState(0);

  // Increase Counter Value
  const handleInc = () => {
    setCounter(counter + 1);
  };

  //Decrease Counter Value
  const handleDec = () => {
    setCounter(counter > 0 ? counter - 1 : 0);
  };
  return (
    <div>
      {isMobile ? (
        <Mobile_User
          counter={counter}
          handleInc={handleInc}
          handleDec={handleDec}
        />
      ) : (
        <User counter={counter} handleInc={handleInc} handleDec={handleDec} />
      )}
    </div>
  );
};

export default Index;
