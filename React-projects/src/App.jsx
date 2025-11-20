import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadData from "./components/load-more-data";
import QrCode from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import StarRating from "./components/star-rating";

function App() {
  return (
    <>
      {/* Accordion component */}
      {/* <Accordion></Accordion> */}
      {/* random-color component */}
      {/* <RandomColor /> */}
      {/* star rating component */}
      {/* <StarRating/> */}
      {/* image-slider component */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}
      {/* load-more-data component */}
      {/* <LoadData /> */}
      {/* QR-CODE component */}
      {/* <QrCode /> */}
      {/* light-dark theme component */}
      {/* <LightDarkMode></LightDarkMode> */}
      {/* custom scroll component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
      {/* custom-tabs component */}
      {/* <TabTest/> */}
      {/* custom-modal component */}
      {/* <ModalTest /> */}
      {/* github-profile component */}
      <GithubProfileFinder />
    </>
  );
}

export default App;
