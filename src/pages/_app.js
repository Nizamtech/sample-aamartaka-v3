import "../styles/globals.scss";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import MobileLayout from "../Layout/MobileLayout";
import DesktopLayout from "../Layout/DesktopLayout";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/worker.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);
  return (
    <>
      <Head>
        <title>Amara taka</title>
      </Head>
      {
        isMobile ? (
          <MobileLayout>
            {" "}
            <Component {...pageProps} isMobile={isMobile} />
          </MobileLayout>
        ) :
          (
            <DesktopLayout>
              <Component {...pageProps} isMobile={isMobile} />
            </DesktopLayout>
          )
      }
    </>
  );
}

export default MyApp;
