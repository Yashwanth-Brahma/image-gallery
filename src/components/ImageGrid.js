import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setClicked }) => {
  const { docs } = useFirestore("images");

  return (
    <Wrapper>
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div key={doc.id} layout whileHover={{ opacity: 1 }}>
              <motion.img
                src={doc.url}
                alt="uploaded img"
                onClick={() => {
                  setClicked(doc.url);
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin: 3rem 0;
  div {
    height: 0;
    padding: 50% 0;
    overflow: hidden;
    position: relative;
    opacity: 0.8;
  }
  img {
    min-height: 100%;
    min-width: 100%;
    max-width: 150%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export default ImageGrid;
