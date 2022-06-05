import "../styles/globals.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import MobileLayout from "../Layout/MobileLayout";
import DesktopLayout from "../Layout/DesktopLayout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {isMobile ? (
        <MobileLayout>
          {" "}
          <Component {...pageProps} isMobile={isMobile} />
        </MobileLayout>
      ) : (
        <DesktopLayout>
          <Component {...pageProps} isMobile={isMobile} />
        </DesktopLayout>
      )}
    </>
  );
}

export default MyApp;
