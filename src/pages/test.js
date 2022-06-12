import React from "react";
import Webcam from "react-webcam";
import BackMenu from "../components/Shared/BackMenu";
const Test = () => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  return (
    <div>
      {" "}
      <BackMenu title="This Test Page" />
      <div>
        <Webcam
          audio={false}
          height={720}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        >
          {({ getScreenshot }) => (
            <button
              onClick={() => {
                const imageSrc = getScreenshot();
                console.log(imageSrc);
              }}
            >
              Capture photo
            </button>
          )}
        </Webcam>
      </div>
    </div>
  );
};

export default Test;
