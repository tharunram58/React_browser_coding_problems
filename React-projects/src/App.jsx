import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadData from "./components/load-more-data";
import QrCode from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
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
      <LightDarkMode></LightDarkMode>
    </>
  );
}

export default App;
