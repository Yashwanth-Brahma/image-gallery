import { motion } from "framer-motion";
import React, { useEffect } from "react";
import styled from "styled-components";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <Wrapper>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: progress + "%" }}></motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    background-color: #00b4d8;
    height: 5px;
  }
`;
export default ProgressBar;
