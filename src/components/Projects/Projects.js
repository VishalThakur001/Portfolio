import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carRental from "../../Assets/Projects/CarRental.png"; // Add your own image in assets
import insiderJobs from "../../Assets/Projects/JodPortal.png"; // Add your own image in assets
import pingUp from "../../Assets/Projects/PingUp.png"; // Add your own image in assets

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carRental}
              isBlog={false}
              title="CarRental"
              description="A car rental platform where users can list, search, and book vehicles with real-time availability tracking. Implemented JWT authentication, user dashboards, and secure booking management."
              ghLink="https://github.com/VishalThakur001/CarRental"
              demoLink="https://car-rental-bay-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insiderJobs}
              isBlog={false}
              title="InsiderJobs"
              description="A recruitment platform where job seekers can search/apply for jobs and companies can post/manage openings. Features include dual authentication (Clerk + JWT), role-based access control, job filters, and Cloudinary for secure file uploads."
              ghLink="https://github.com/VishalThakur001/JobPortal"
              demoLink="https://job-portal-client-zeta-navy.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pingUp}
              isBlog={false}
              title="PingUp"
              description="A full-stack social media app with authentication, user profiles, posting, and real-time chat using Clerk and WebSockets. Optimized MongoDB queries with pagination for smooth performance and built scalable APIs for social interactions."
              ghLink="https://github.com/VishalThakur001/PingUp"
              demoLink="https://pingup-navy.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;