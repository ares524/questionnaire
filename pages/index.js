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
  Input,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import config from "constants/config";
import cache from "memory-cache";

const { AnswerService } = require("m3o/answer");
const answerService = new AnswerService(config.M3O_API_TOKEN);

const Index = () => {
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const { t } = useTranslation('common');

  useEffect(() => {
  }, []);

  const handleSubmit = () => {
    async function askAquestion() {
      const rsp = await answerService.question({
        query: currentQuestion,
      });
      setCurrentAnswer(rsp);
      cache.put(currentQuestion, rsp, config.hours * 1000 * 60 * 60);
    }

    const cachedResponse = cache.get(currentQuestion);

    if (cachedResponse) {
      setCurrentAnswer(cachedResponse);
    } else {
      askAquestion();
    }
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
                        <CardHeader> <h6 className={`fw-bold ${s.cardHeaderTitle}`}> {t('question')} </h6> </CardHeader>
                        <CardBody style={{ height: "307px", overflow: "auto" }}>
                          <Input
                            type="textarea"
                            name="text"
                            className={`w-100 border-0 ${s.cardContentText}`}
                            style={{ height: 200 }}
                            value={currentQuestion}
                            onChange={(e) => setCurrentQuestion(e.target.value)}
                          />
           
                          <Button
                            color="default"
                            className={`text-uppercase mt-4 mr-auto fw-bold d-flex align-items-center ${s.submitBtn} ml-auto`}
                            onClick={() => handleSubmit()}
                          >
                            <p className={`mb-0`}>{t('submit')}</p>{" "}
                          </Button>
                        </CardBody>
                      </Card>
                      
                    </Col>
                    <Col sm="12" md={12} lg={6}>
                      <Card className="mt-5">
                        <CardHeader> <h6 className={`fw-bold ${s.cardHeaderTitle}`}> {t('answer')} </h6> </CardHeader>
                        <CardBody style={{ height: "307px", overflow: "auto" }}>
                          <p className={`${s.cardContentText}`}>{currentAnswer?.answer}</p>
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

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Index;
