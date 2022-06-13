import React, { useState } from "react";
import Webcam from "react-webcam";
import { useRouter } from "next/router";

import Geocode from "react-geocode";

const WebCamera = ({ handleBase64Upload }) => {
  Geocode.setApiKey("AIzaSyAKkmoH E5VSamY14T7_xF-ZPDdUtZnVmws");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");

  const [state, setState] = useState({});

  const start = () => {
    audio.play();
  };

  const position = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // getAddress(position.coords.latitude, position.coords.longitude);
        getAddress2(position.coords.latitude, position.coords.longitude);
        setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => console.log(err)
    );
    console.log(state.latitude);
  };

  // get address from lat and lng
  const getAddress = (lat, lon) => {
    console.log("enter the box");

    Geocode.fromLatLng(lat, lon).then(
      (response) => {
        const address = response.results[0].formatted_address;
        console.log("address", response, address);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // get address 2 from lat and lng

  const getAddress2 = (lat, lon) => {
    Geocode.fromLatLng(lat, lon).then(
      (response) => {
        const address = response.results[0].formatted_address;
        let area, city, state2, state3, state, country;
        for (
          let i = 0;
          i < response.results[0].address_components.length;
          i++
        ) {
          for (
            let j = 0;
            j < response.results[0].address_components[i].types.length;
            j++
          ) {
            switch (response.results[0].address_components[i].types[j]) {
              case "locality":
                city = response.results[0].address_components[i].long_name;
                break;
              case "neighborhood":
                area = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_1":
                state = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_2":
                state2 = response.results[0].address_components[i].long_name;
                break;
              case "administrative_area_level_3":
                state3 = response.results[0].address_components[i].long_name;
                break;
              case "country":
                country = response.results[0].address_components[i].long_name;
                break;
            }
          }
        }
        console.log(area, city, state, state2, state3, country);
        console.log(address, response);
      },
      (error) => {
        console.error(error);
      }
    );
  };

  // var audio = new Audio("./camera.mp3");
  // console.log(audio);

  const router = useRouter();
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);

    position();
    // getAddress();
    console.log("After Geocode");
    setImgSrc(imageSrc);

    // new Audio(audio).play();
  }, [webcamRef, setImgSrc]);

  console.log(state);

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
              // onClick={() => handleBase64Upload}
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
