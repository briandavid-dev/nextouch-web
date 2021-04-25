import { useEffect, useState } from "react";
import { Row, Col, Carousel, Divider } from "antd";
import Head from "next/head";
import Link from "next/link";
import css from "styled-jsx/css";
import { celulares } from "../config/celulares.json";

const stylesCss = css.global``;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  const [dataApple, setDataApple] = useState([]);

  useEffect(() => {
    setDataApple(celulares.filter((celu) => celu.marca === "iphone"));
  }, []);

  return (
    <div>
      <style jsx global>
        {stylesCss}
      </style>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        /> 
         <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
          crossorigin="anonymous"
        ></script>
        */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        <title>Nextouchonline</title>
      </Head>
      <div style={{ padding: "1rem" }}>
        <Row type="flex" justify="center" gutter={[40, 40]}>
          <Col span={20}>
            <Row type="flex" justify="center" gutter={[40, 40]}>
              <Col span={4}>
                <img src="/assets/logo.jpg" alt="" width={60} height={60} />
              </Col>
              <Col span={20}>MENU</Col>
            </Row>
            <br />
            <Row type="flex" justify="center" gutter={[40, 40]}>
              <Col span={24}>
                <Carousel effect="fade">
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                </Carousel>
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center">
              <Col span={24} style={{ textAlign: "center" }}>
                <Divider>Apple</Divider>
              </Col>
              <Col span={24}>
                {dataApple.length > 0 && (
                  <Carousel effect="fade">
                    <div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <Link href={dataApple[0].modelo.replaceAll(" ", "-")}>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src={dataApple[0].imagenes[0]}
                              alt=""
                              width={120}
                              height={120}
                            />
                            {dataApple[0].modelo}
                          </div>
                        </Link>
                        <Link href={dataApple[1].modelo.replaceAll(" ", "-")}>
                          <div style={{ textAlign: "center" }}>
                            <img
                              src={dataApple[1].imagenes[0]}
                              alt=""
                              width={120}
                              height={120}
                            />
                            {dataApple[1].modelo}
                          </div>
                        </Link>
                        <div>
                          <img
                            src={dataApple[2].imagenes[0]}
                            alt=""
                            width={120}
                            height={120}
                          />
                        </div>
                        <div>
                          <img
                            src={dataApple[3].imagenes[0]}
                            alt=""
                            width={120}
                            height={120}
                          />
                        </div>
                        <div>
                          <img
                            src={dataApple[4].imagenes[0]}
                            alt=""
                            width={120}
                            height={120}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>4</h3>
                    </div>
                  </Carousel>
                )}
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center">
              <Col span={24}>
                <Col span={24} style={{ textAlign: "center" }}>
                  <Divider>Samsung</Divider>
                </Col>
              </Col>
              <Col span={24}>
                <Carousel effect="fade">
                  <div>
                    <h3 style={contentStyle}>1</h3>
                  </div>
                  <div>
                    <div style={{ backgroundColor: "red" }}>hola que tal</div>
                  </div>
                  <div>
                    <h3 style={contentStyle}>3</h3>
                  </div>
                  <div>
                    <h3 style={contentStyle}>4</h3>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
