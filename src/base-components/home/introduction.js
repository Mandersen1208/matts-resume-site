import { Container } from "@mui/material";
import { introductionImage } from "../../Assets";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introductionWrapper">
      <Container className="introductionSection">
        <h1 className="contentHeader">Introduction</h1>
        <Container className="introductionText">
          <div className="textImageContainer">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia temporibus numquam
              magnam minus sed, doloremque, iure ipsa libero obcaecati voluptates facilis debitis
              labore porro, minima perspiciatis molestias eos deleniti?
            </p>
            <img src={introductionImage} alt="me leaning on a post" className="introductionImage" />
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Introduction;