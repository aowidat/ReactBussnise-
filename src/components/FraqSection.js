import styled from "styled-components";
import { About } from "../styles";
import { useState } from "react";
import Toggel from "./Toggel";
import { useScroll } from "./useScroll";
import { AnimateSharedLayout } from "framer-motion";
import { fade } from "../animation";
const FraqSection = () => {
  const [element, controls] = useScroll();
  const [faqToggel, setFaqStoogel] = useState(false);
  return (
    <Faq ref={element} initial="hidden" variants={fade} animate={controls}>
      <h2>
        Any Q? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggel title="How Do I Start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              recusandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              recusandae.
            </p>
          </div>
        </Toggel>
        <Toggel title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              non?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              recusandae.
            </p>
          </div>
        </Toggel>
        <Toggel title="Daily Schedule">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              non?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              recusandae.
            </p>
          </div>
        </Toggel>
        <Toggel title="Differn Payment Methode">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              non?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              recusandae.
            </p>
          </div>
        </Toggel>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FraqSection;
