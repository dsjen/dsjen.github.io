import React, { useState } from "react";
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Card,
  CardTitle,
  CardBody
} from "reactstrap";

const ProjectDetails = props => {
  const { image, name, children } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card onClick={toggle} tabindex="0" role="button">
      {image}
      <CardBody className="text-center">
        <CardTitle className="">{name}</CardTitle>
        <Modal
          className="project-modal"
          isOpen={modal}
          toggle={toggle}
          centered={true}
          size="lg"
        >
          <ModalHeader toggle={toggle}></ModalHeader>
          <ModalBody>
            <Row>
              <Col md={4} className="text-center">
                <div>{image}</div>
                <div className="py-2">{name}</div>
              </Col>
              <Col md={8}>
                <p>{children}</p>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </CardBody>
    </Card>
  );
};

export default ProjectDetails;
