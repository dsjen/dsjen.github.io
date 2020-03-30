import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Row, Col, CardDeck } from "reactstrap";

import DennisProfile from "../components/dennis-profile";
import Imagesurfer from "../components/imagesurfer";
import FreshFeed from "../components/fresh-feed";
import Gridvar from "../components/gridvar";
import CircularGenome from "../components/circular-genome";
import ProjectDetails from "../components/project-details";
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Dennis Jen" />
    <Row className="pt-5 pb-3">
      <Col>
        <h1 className="pb-4">
          <span className="bg p-4">Dennis Jen</span>
        </h1>
        <div className="d-block d-sm-none">
          <DennisProfile />
        </div>
        <p className="p-4 bg">
          I'm a software engineer with a specialization in visualization.
          Currently I'm a lead developer at the MIT Media Lab, and most recently
          I've held positions at edX, Novartis, and Bluefin Labs.
        </p>
      </Col>
    </Row>
    <Row className="pt-3 pb-4">
      <Col sm={9}>
        <h2 className="pb-4">
          <span className="bg p-4">Highlighted Projects</span>
        </h2>
        <CardDeck>
          <ProjectDetails name="Fresh Feed" image=<FreshFeed />>
            <p>
              <a
                href="https://gobo.social"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gobo
              </a>{" "}
              presents an alternate approach to social media, putting you in
              control of what posts get shown and what don’t. As we learned more
              about these algorithms, we wanted to interrogate them a bit more.
              We wanted to understand how the major social media platforms were
              shaping what we saw. We’ve already started to learn that there’s
              more to it than you see. We started with Facebook, and the idea
              that what you see on your feed is the freshest take on what is
              happening. We wondered—just how fresh were our feeds? Check out{" "}
              <a
                href="http://howfreshisyourfeed.social"
                rel="noopener noreferrer"
                target="_blank"
              >
                http://howfreshisyourfeed.social
              </a>{" "}
              to see what we learned.
            </p>
          </ProjectDetails>
          <ProjectDetails name="Gridvar" image=<Gridvar />>
            <p>
              <a
                href="https://opensource.nibr.com/projects/gridvar/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gridvar
              </a>{" "}
              is a jQuery plugin that visualizes multi-dimensional datasets as
              layers organized in a row-column format. At each cell (i.e.,
              rectangle at the intersection of a row and column), GridVar
              displays your data as a background color (like a color/heat map)
              and/or a glyph (shape). This enables different characteristics of
              your dataset to be layered on top of each other.
            </p>
          </ProjectDetails>
          <ProjectDetails name="MEDEA" image=<CircularGenome />>
            <p>
              MEDEA is a suite of comparative genome visualization tools that my
              team and I worked on at the{" "}
              <a
                href="https://www.broadinstitute.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Broad Institute
              </a>
              .
            </p>

            <p>
              The suite of tools consists of the Circular Genome Viewer, Stack
              Map, ChromoMap, Dot Plot, and Viral Viewer. Each was built in
              ActionScript and employs different visual representations to
              reveal similarities and differences between genomes at various
              levels of zoom and detail.
            </p>

            <p>
              I presented this work in a talk at{" "}
              <a
                href="https://www.pechakucha.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Pecha Kucha
              </a>
              , as well as at posters at retreats and conferences, including{" "}
              <a
                href="http://vis.computer.org/VisWeek2009/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                IEEE Visualization 2009
              </a>
              .
            </p>
          </ProjectDetails>
          <ProjectDetails name="ImageSurfer" image=<Imagesurfer />>
            <p>
              While at graduate school at The University of North Carolina at
              Chapel Hill, I took a scientific visualization class. The final
              project eventually morphed into a full fledged research project
              where I worked with neuroscientists eager to understand the
              correlation between two chemicals.
            </p>

            <p>
              I built a tool for reconstructing the neuronal structures into a
              surface and then color the surface based on presence of a chemical
              of interest. Using a six-degree-of-freedom device (or a simple
              mouse if you didn't happen to have one), the user was able to
              slice a the structures at arbitrary angles to understand the
              distribution of the chemical within the structures and perform
              further analysis.
            </p>

            <p>
              This project became ImageSurfer and resulted in a first author
              publication in IEEE Visualization 2004 and a subsequent
              publication in the Journal of Neuroscience, in addition to posters
              at the Society for Neuroscience meetings.
            </p>
          </ProjectDetails>
        </CardDeck>
      </Col>
    </Row>

    <Row className="py-3">
      <Col>
        <h2>
          <span className="bg p-4">On the Web</span>
        </h2>
        <div className="py-4">
          <p className="bg p-4">
            <a
              className="pr-4"
              href="https://github.com/dsjen"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              className="pr-4"
              href="https://www.linkedin.com/in/dennisjen/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="pr-4"
              href="https://twitter.com/DenJenTweets"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="pr-4"
              href="https://www.instagram.com/denjengrams"
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </p>
        </div>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
