import React, { useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
const WebCamera = () => {
    const router = useRouter()
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const capture = React.useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc);
      setImgSrc(imageSrc);
    }, [webcamRef,setImgSrc]);
    return (
        <div>
           {imgSrc!==null ? 
               <div>
                    <img
                    src={imgSrc}
                />
             <div className="flex justify-between items-center">
             <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2 my-4  px-3 py-2  flext justify-center items-center mx-auto w-40"
              onClick={()=>setImgSrc(null)}
            >
              Reset
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2 my-4  px-3 py-2  flext justify-center items-center mx-auto w-40 "
              onClick={()=>router.push('/')}
            >
              Submit
            </button>
             </div>
               </div>
            :<div>
            
              <Webcam
                audio={false}
                height={500}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width="100%"
                // videoConstraints={videoConstraints}
              />
            
            <button
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800 m-2 my-4  px-3 py-2  flext justify-center items-center mx-auto w-full"
              onClick={capture}
            >
              Capture photo
            </button>
            
          </div>} 
        </div>
    );
};

export default WebCamera;