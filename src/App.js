import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import ShowImage from "./components/ShowImage";
import Title from "./components/Title";
import UpLoadImg from "./components/UpLoadImg";

const App = () => {
  const [clicked, setClicked] = useState(null);
  return (
    <div>
      <Title />
      <UpLoadImg />
      <ImageGrid setClicked={setClicked} />
      {clicked && <ShowImage clicked={clicked} setClicked={setClicked} />}
    </div>
  );
};

export default App;
