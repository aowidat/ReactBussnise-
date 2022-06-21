import { motion } from "framer-motion";
import { useState } from "react";

const Toggel = ({ children, title }) => {
  const [toggel, setToggel] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggel(!toggel)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggel ? children : ""}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggel;
