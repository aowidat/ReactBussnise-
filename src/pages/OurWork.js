import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  silder,
  silderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();

  return (
    <Work
      style={{ background: "#ffffe6" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={silderContainer}>
        <Frame1 variants={silder}></Frame1>
        <Frame2 variants={silder}></Frame2>
        <Frame3 variants={silder}></Frame3>
        <Frame4 variants={silder}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>
          Fahrten zu Schulen, Kitas und Förderein­richtungen
        </motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <h2>
          Wir bringen täglich Menschen mit und ohne Behinderungen sicher von A
          nach B. <br /> Kindersitze und Sitzschalen stellen wir bei Bedarf gern
          zur Verfügung. <br />
          Unsere Fahrer und Begleitpersonen stehen Ihnen als direkte
          Ansprechpartner zur Seite.
        </h2>
      </Movie>
      <Movie
        ref={element1}
        variants={fade}
        animate={controls1}
        initial="hidden"
      >
        <h2>Fahrten zu Flughafen und Bahnhofen</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <h2>
          Probleme bei Parkplatzsuche oder den Umstieg verpassen? <br />
          Nicht bei Uns, Unser Fahrer kuemmert sich fuer Sie um alles moeglich,
          von Abholen von Ihrem Zuhause bis zum Bahnhof und Flughafen. Und
          sicher ist er da wartet auf Sie wenn Sie nach Hause zurueckfahren
          wollen. <br /> Von 1 Person bis zu 8 Personen mit Gepäck.
        </h2>
      </Movie>
      <Movie
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>Fahrten von Patienten</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <h2>
          Wir bringen Sie zu Praxen, Klinken, Krankenhaeusern und Aertzen hin
          und zurueck. <br /> Wir begleiten Sie und geben Ihnen dabei
          Hilfestellenungen jeglicher Art. <br /> Die verordneten Fahrten
          rechnen wir direkt und bequem für Sie mit allen Kostenträgern ab,
          sofern eine Kostenübernahme schriftlich vorliegt.
        </h2>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  background: gray;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
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
export default OurWork;
