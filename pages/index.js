import { useEffect, useState } from "react";
import { Row, Col, Carousel, Divider } from "antd";
import Head from "next/head";
import Link from "next/link";
import css from "styled-jsx/css";
import { celulares } from "../config/celulares.json";
import MenuBar from "../components/Header/MenuBar";
import BarraProductos from "../components/common/BarraProductos";

const stylesCss = css.global`
  .ant-carousel .slick-dots li button {
    background: #23a34e;
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: #23a34e;
    opacity: 1;
  }
`;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  const [dataApple, setDataApple] = useState([]);
  const [dataXiaomi, setDataXiaomi] = useState([]);

  useEffect(() => {
    setDataApple(celulares.filter((celu) => celu.marca === "iphone"));
    setDataXiaomi(celulares.filter((celu) => celu.marca === "xiaomi"));
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
          <Col xs={24} lg={20}>
            <Row type="flex" justify="center" gutter={[40, 40]}>
              <Col span={4}>
                <Link href="/">
                  <img src="/assets/logo.jpg" alt="" width={60} height={60} />
                </Link>
              </Col>
              <Col span={20}>
                <MenuBar />
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center" gutter={[40, 40]}>
              <Col span={24}>
                <Carousel effect="fade">
                  <div>
                    <div style={{ textAlign: "center" }}>
                      <img
                        src="/assets/imgs/banners/banner.png"
                        alt=""
                        width={1920}
                        // height="100%"
                        style={{
                          maxWidth: "100%",
                          display: "inline",
                        }}
                      />
                    </div>
                  </div>
                </Carousel>
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center">
              <Col span={24} style={{ textAlign: "center" }}>
                <Divider orientation="left">Apple</Divider>
              </Col>
              <Col xs={0} lg={24}>
                {dataApple.length > 0 && (
                  <Carousel effect="fade">
                    <BarraProductos data={dataApple} items={[1, 2, 3, 4, 5]} />
                    <BarraProductos data={dataApple} items={[6, 7, 8, 9, 10]} />
                    <BarraProductos
                      data={dataApple}
                      items={[11, 12, 13, 14, 15]}
                    />
                    <BarraProductos
                      data={dataApple}
                      items={[16, 17, 18, 19, 20]}
                    />
                  </Carousel>
                )}
              </Col>
              <Col xs={24} lg={0}>
                {dataApple.length > 0 && (
                  <Carousel effect="fade">
                    <BarraProductos data={dataApple} items={[1, 2]} />
                    <BarraProductos data={dataApple} items={[3, 4]} />
                    <BarraProductos data={dataApple} items={[5, 6]} />
                    <BarraProductos data={dataApple} items={[7, 8]} />
                    <BarraProductos data={dataApple} items={[9, 10]} />
                    <BarraProductos data={dataApple} items={[11, 12]} />
                    <BarraProductos data={dataApple} items={[13, 14]} />
                  </Carousel>
                )}
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center">
              <Col span={24} style={{ textAlign: "center" }}>
                <Divider orientation="left">Xiaomi</Divider>
              </Col>
              <Col span={24}>
                {dataApple.length > 0 && (
                  <Carousel effect="fade">
                    <BarraProductos data={dataXiaomi} items={[1, 2]} />
                  </Carousel>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
