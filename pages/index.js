import React, { useState, useEffect } from "react";
import s from "pages/index.module.scss";
import Link from "next/link";
import axios from "axios";
import Head from "next/head";
import {
  Container,
  Button,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Form,
  Card,
  CardHeader,
  CardBody,
  ListGroup, 
  ListGroupItem
} from "reactstrap";

const Index = () => {
  const [currentAnswer, setCurrentAnswer] = useState('Hello world');

  useEffect(() => {
  }, []);

  const handleSubmit = () => {
    alert('success');
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row className={"no-gutters"} style={{ height: "100vh" }}>
          <Col xs={12} sm={12} md={2}  >
          </Col>
          <Col
            xs={12}
            md={8}
            className={
              "d-flex flex-column justify-content-center align-items-center h-100"
            }
          >
            <Container>
              <Row>
                <Col lg={12}>
                  <Row>
                    <Col sm="12" md={12} lg={6}>
                      <Card className="mt-5">
                        <CardHeader> <h6 className={"fw-bold"}> Question </h6> </CardHeader>
                        <CardBody style={{ height: "307px", overflow: "auto" }}>
                          <Input
                            type="textarea"
                            name="text"
                            className="w-100 border-0"
                            style={{ height: 200 }}
                          />
           
                          <Button
                            outline
                            color="primary"
                            className={`text-uppercase mt-4 mr-auto fw-bold d-flex align-items-center ${s.viewMoreBtn} ml-auto`}
                            style={{ backgroundColor: "black", borderColor: "black", color: "white" }}
                            onClick={() => handleSubmit()}
                          >
                            <p className={"mb-0"}>Submit</p>{" "}
                          </Button>
                        </CardBody>
                      </Card>
                      
                    </Col>
                    <Col sm="12" md={12} lg={6}>
                      <Card className="mt-5">
                        <CardHeader> <h6 className={"fw-bold"}> Answer </h6> </CardHeader>
                        <CardBody style={{ height: "307px", overflow: "auto" }}>
                          <p>{currentAnswer}</p>
                        </CardBody>
                      </Card>
                      
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col xs={12} sm={12} md={2}></Col>
        </Row>
    </>
  );
};

export async function getServerSideProps(context) {

  return {
    props: { }, // will be passed to the page component as props
  };
}

export default Index;
