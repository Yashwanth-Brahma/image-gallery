import React, { useState } from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const UpLoadImg = () => {
  const [imgFile, setImgFile] = useState(null);
  const [error, setError] = useState("");
  const type = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    const selected = e.target.files[0];
    console.log(selected);
    if (selected && type.includes(selected.type)) {
      setImgFile(selected);
      setError("");
    } else {
      setImgFile(null);
      setError("select image file(jpeg or png file)");
    }
  };

  return (
    <Wrapper>
      <form>
        <label>
          <span>+</span>
          <input type="file" onChange={handleChange} />
        </label>
        <div className="output">
          {error && <p>{error}</p>}
          {imgFile && <p>{imgFile.name}</p>}
          {imgFile && <ProgressBar file={imgFile} setFile={setImgFile} />}
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  input {
    width: 0;
    height: 0;
  }

  span {
    padding: 0.4rem 0.8rem;
    height: auto;
    width: max-content;
    border: 1px solid #00b4d8;
    color: #00b4d8;
    border-radius: 50%;
    display: inline-block;
  }
  span:hover {
    background-color: #caf0f8;
  }
`;
export default UpLoadImg;
