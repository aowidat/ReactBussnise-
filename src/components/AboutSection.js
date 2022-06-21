import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles";
import { motion } from "framer-motion";

import { titelAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  // const titleAnim = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1, transition: { duration: 2 } },
  // };
  // const contianer = {
  //   hidden: { x: 100 },
  //   show: {
  //     x: 0,
  //     transition: {
  //       duration: 0.75,
  //       ease: "easeOut",
  //       staggerChildren: 0.5,
  //       // when: "beforeChildren",
  //     },
  //   },
  // };
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titelAnim}>We Work to Make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titelAnim}>
              your <span>dreams </span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titelAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Contact us for any Thing</motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Me Or Him" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
