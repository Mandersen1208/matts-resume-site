import { Box, Container } from "@mui/material";
import { introductionImage } from "../../Assets";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introductionWrapper">
      <Container className="introductionSection">
        <h1 className="contentHeader">Introduction</h1>
        <Container className="introductionText">
          <div className="textImageContainer">
            <Box
              component={"img"}
              src={introductionImage}
              alt="leaning"
              className="introductionImage"
            />
            <div className="textContainer">
              <p>
                Hello, I’m Matthew Andersen, a Full Stack Software Developer based in Loganville,
                GA. With over two years of experience in crafting secure, reliable, and scalable
                software solutions, I bring a well-rounded expertise in both backend and frontend
                development. My proficiency in Java and SQL, combined with hands-on experience in
                Angular, JavaScript, and React, enables me to build and maintain robust
                applications. I have a strong foundation in cloud computing, utilizing AWS and Azure
                DevOps for CI/CD pipelines, and am familiar with containerization technologies like
                Docker and Kubernetes. My background also includes working within agile teams to
                deliver high-quality software solutions that adapt to evolving business needs. I am
                committed to continuous learning and professional growth, consistently staying
                updated with modern debugging techniques, security frameworks, and best practices in
                software development. Whether working on microservices, performance tuning, or
                version control, I am dedicated to creating efficient and effective software
                solutions. Feel free to connect with me on LinkedIn or explore my projects on GitHub
                to learn more about my work.
              </p>
              <p>
                While this site it new there is more work to be done. I am currently working on it
                and will be more robust in the future. below is a link to download my resume. and a
                link to my LinkedIn profile and git hub profiles.
              </p>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Introduction;
