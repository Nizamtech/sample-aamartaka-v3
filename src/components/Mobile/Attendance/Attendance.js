import React from "react";
import BackMenu from "../../Shared/BackMenu";
import WebCamera from "./WebCamera";

const Attendance = ({attend}) => {
  // BASE64 IMAGE UPLOADING
  const [base64, setBase64] = React.useState(null);
  const [base64Error, setBase64Error] = React.useState(null);
  const [base64Uploading, setBase64Uploading] = React.useState(false);
  const [base64Uploaded, setBase64Uploaded] = React.useState(false);

  const handleBase64Change = (e) => {
    e.preventDefault();
    setBase64(e.target.files[0]);
    setBase64Error(null);
  };

  const handleBase64Upload = () => {
    const formData = new FormData();
    formData.append("image", base64);
    setBase64Uploading(true);
    fetch("/api/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setBase64Uploading(false);
        setBase64Uploaded(true);
      })

      .catch((err) => {
        setBase64Uploading(false);
        setBase64Error(err);
      });
  };

  return (
    <div>
        <h1>{attend}</h1>
      <BackMenu title="Attendence " />
      <WebCamera handleBase64Upload={handleBase64Upload} />
    </div>
  );
};

export default Attendance;
