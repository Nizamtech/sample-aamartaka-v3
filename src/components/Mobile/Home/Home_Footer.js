import React from "react";
import Image from "next/image";
import Modal from "../../Shared/Modal";
import { useState } from "react";
import Footer_modal from "../../Shared/Footer_modal";
import Webcam from "react-webcam";
import { useRouter } from "next/router";
import plus from "../../../images/plus.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faBook, faChartLine, faBars } from '@fortawesome/free-solid-svg-icons';
import Attendence_Details_Card from "../Attendance/Attendence_Details_Card";

const Home_Footer = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  // const handleClose = () => setShowModal(false);
  // const handleShow = () => setShowModal(true);
  const handleAttendance = () => {
    setShowModal(true);
  };


  function addClass(elem) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function (e) {
        const current = this;
        for (let i = 0; i < elem.length; i++) {
          if (current !== elem[i]) {
            elem[i].classList.remove("isActive");
            elem[i].classList.add("notActive");
          } else {
            current.classList.add("isActive");
            current.classList.remove("notActive");
          }
        }
        e.preventDefault();
      });
    }
  }
  addClass(document.querySelectorAll(".link"));

  return (
    <>
      <div className="z-50 sticky bottom-0 mt-5">
        <nav className="tabbar w-full h-[50px] border-t border-gray-200 bg-white">
          <div className="flex h-full relative">
            <input id="menu-1" type="radio" name="menu" className="hidden" onClick={() => handleAttendance()} />
            <label htmlFor="menu-1" className="divider">
              <svg>
                <use href="#messageIcon" />
              </svg>
              <span>Attendance</span>
            </label>
            <input id="menu-2" type="radio" name="menu" className="hidden" checked onClick={() => router.push("/lead/newlead")} />
            <label htmlFor="menu-2" className="divider">
              <svg>
                <use href="#imageIcon" />
              </svg>
              <span>Lead</span>
            </label>
            <input id="menu-3" type="radio" name="menu" className="hidden" onClick={() => () => router.push("/dashboard")} />
            <label htmlFor="menu-3">
              <svg>
                <use href="#settingsIcon" />
              </svg>
              <span>States</span>
            </label>
            <span></span>
            <div style={{ display: "none" }}>
              <FontAwesomeIcon icon={faBook} className="w-7 h-7" id="messageIcon" />
              <FontAwesomeIcon icon={faCirclePlus} className=" w-6 h-6" id="imageIcon" />
              <FontAwesomeIcon icon={faChartLine} className="w-7 h-7" id="settingsIcon" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Home_Footer;
