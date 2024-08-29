import { Container } from "@mui/material";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introductionWrapper">
      <Container className="introductionSection">
        <h1 className="contentHeader">Introduction</h1>
        <Container className=".introductionText" >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quia
            temporibus numquam magnam minus sed, doloremque, iure ipsa libero
            obcaecati voluptates facilis debitis labore porro, minima
            perspiciatis molestias eos deleniti?
          </p>
        </Container>
      </Container>
    </div>
  );
};

export default Introduction;
