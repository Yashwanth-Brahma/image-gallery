import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const ShowImage = ({ clicked, setClicked }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("back")) {
      setClicked(null);
    }
  };

  return (
    <Wrapper>
      <motion.div
        className="back"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={handleClick}>
        <motion.img
          src={clicked}
          alt="upload"
          initial={{ y: "-100vh" }}
          animate={{ y: "0vh" }}
        />
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
  }
`;
export default ShowImage;
