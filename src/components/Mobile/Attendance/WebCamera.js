import React, { useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
const WebCamera = ({ handleBase64Upload }) => {
  const start = () => {
    audio.play();
  };

  // var audio = new Audio("./camera.mp3");
  // console.log(audio);

  const router = useRouter();
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    new Audio(audio).play();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <div>
      {imgSrc !== null ? (
        <div className=" bg-white w-full">
          <img src={imgSrc} />
          <div className="flex justify-between items-center">
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2 my-4  px-3 py-2  flext justify-center items-center mx-auto w-40"
              onClick={() => setImgSrc(null)}
            >
              Reset
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2 my-4  px-3 py-2  flext justify-center items-center mx-auto w-40 "
              onClick={() => handleBase64Upload}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Webcam
            className="relative"
            audio={false}
            height={"100%"}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width="100%"
            // videoConstraints={videoConstraints}
          />

          <div className=" absolute bottom-0 w-full bg-none ">
            <button
              onClick={capture}
              className=" flex justify-center items-center mx-auto"
            >
              <img
                className="mx-auto"
                width="100px"
                height="100px"
                src="https://i.ibb.co/XsTrNxp/camera.png"
                alt=""
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebCamera;
