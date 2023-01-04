import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
