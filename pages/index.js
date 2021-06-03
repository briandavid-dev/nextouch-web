import { Row, Col, Carousel, Divider } from "antd";
import Head from "next/head";
import Link from "next/link";
import css from "styled-jsx/css";
import MenuBar from "../components/Header/MenuBar";
import ProductosIphone from "../components/Home/ProductosIphone";
import ProductosIphoneAlMayor from "../components/Home/ProductosIphoneAlMayor";
import ProductosSamsung from "../components/Home/ProductosSamsung";
import ProductosXiaomi from "../components/Home/ProductosXiaomi";
import ProductosAlcatel from "../components/Home/ProductosAlcatel";
import Footer from "../components/Footer";

const stylesCss = css.global``;

/* 
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
}; */

export default function Home() {
  return (
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        <title>Phones, Tablets, Accesories | nextouchonline.com</title>
      </Head>
      <div style={{ padding: "1rem" }}>
        <Row type="flex" justify="center">
          <Col xs={24} lg={20}>
            <Row type="flex" justify="center">
              <Col span={4}>
                <Link href="/">
                  <img
                    src="/assets/logo.jpg"
                    alt="nextouchonline.com"
                    width={60}
                    // height={60}
                    className="cursor-pointer"
                    style={{ maxWidth: "100%" }}
                  />
                </Link>
              </Col>
              <Col span={20}>
                <MenuBar />
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="center" gutter={[40, 40]}>
              <Col span={24}>
                <Carousel effect="fade" autoplay={true}>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="/assets/imgs/banners/banner1.jpg"
                      alt=""
                      width={1920}
                      // height="100%"
                      style={{
                        maxWidth: "100%",
                        display: "inline",
                      }}
                    />
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <img
                      src="/assets/imgs/banners/banner2.jpg"
                      alt=""
                      width={1920}
                      // height="100%"
                      style={{
                        maxWidth: "100%",
                        display: "inline",
                      }}
                    />
                  </div>
                </Carousel>
              </Col>
            </Row>

            <br />
            <Row type="flex" justify="center" gutter={[0, 0]}>
              <Col xs={24} lg={12} md={12} sm={12} xl={12}>
                <div
                  style={{
                    backgroundColor: "#DAEAD0",
                    padding: "1rem",
                    borderRadius: "3px",
                    height: "100%",
                  }}
                >
                  <h1>Vendemos al mayor y al detal.</h1>
                  <h2>Smartphones, partes y piezas.</h2>
                  <Divider />
                  <h2>
                    Teléfono:{" "}
                    <a
                      href="tel:+17863011385"
                      style={{ textDecoration: "none" }}
                    >
                      +17863011385
                    </a>
                    .
                  </h2>
                  <h2>Dirección: 2930 NW 72 AVE MIAMI FL 33122.</h2>
                  <h3>
                    Pulsa{" "}
                    <a
                      href="https://goo.gl/maps/4k1WB2EMZSsGriV98"
                      style={{ textDecoration: "underline" }}
                      target="_blank"
                    >
                      aquí
                    </a>{" "}
                    para ver como llegar en el mapa
                  </h3>
                </div>
              </Col>
              <Col xs={24} lg={12} md={12} sm={12} xl={12}>
                <img
                  alt="store"
                  style={{ maxWidth: "100%" }}
                  src="/assets/imgs/home/mapanextouch2.png"
                />
              </Col>
            </Row>

            <br />
            <Row type="flex" justify="center" gutter={[40, 40]}>
              <Col span={24}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.0778843293824!2d-80.31571218497827!3d25.801004483618836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b984d931f15b%3A0x671ad9b2d2653c96!2s2930%20NW%2072nd%20Ave%2C%20Miami%2C%20FL%2033122%2C%20EE.%20UU.!5e0!3m2!1ses-419!2scl!4v1620528652521!5m2!1ses-419!2scl"
                  // width="600"
                  // height="450"
                  // allowfullscreen=""
                  loading="lazy"
                  style={{
                    width: "100%",
                    border: 0,
                    borderRadius: "5px",
                    height: "300px",
                  }}
                ></iframe>
              </Col>
            </Row>

            <ProductosIphone />
            <ProductosIphoneAlMayor />
            <ProductosSamsung />
            <ProductosXiaomi />
            <ProductosAlcatel />
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
}
