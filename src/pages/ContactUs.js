import { motion } from "framer-motion";
import {
  pageAnimation,
  titelAnim,
  silder,
  silderContainer,
} from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#ffffe6" }}
    >
      <motion.div variants={silderContainer}>
        <Frame1 variants={silder}></Frame1>
        <Frame2 variants={silder}></Frame2>
        <Frame3 variants={silder}></Frame3>
        <Frame4 variants={silder}></Frame4>
      </motion.div>
      <div>
        <Title>
          <Hide>
            <motion.h2 variants={titelAnim}>TDH</motion.h2>
          </Hide>
        </Title>
        <Hide>
          <Social variants={titelAnim}>
            <Circle />
            <h2>Anprechpartner: Yaseen Al Homsi</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titelAnim}>
            <Circle />
            <h2>
              Mobile: <a href="tel: 0160 6353030">0160 6353030</a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titelAnim}>
            <Circle />
            <h2>
              Email:{" "}
              <a href="mailto: tdh.service.de@gmail.com">
                {" "}
                tdh.service.de@gmail.com
              </a>
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titelAnim}>
            <Circle />
            <h2>
              Adresse: Alfred-Kaestner-Str.58 <br />
              04275 Leipzig
            </h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1300px) {
    padding: 2rem;
    sont-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default ContactUs;
