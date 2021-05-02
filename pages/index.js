import { Row, Col, Carousel } from "antd";
import Head from "next/head";
import Link from "next/link";
import css from "styled-jsx/css";
import MenuBar from "../components/Header/MenuBar";
import ProductosIphone from "../components/Home/ProductosIphone";
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

        <title>Phones, Tablets, Accesories | nextouchonline.com/</title>
      </Head>
      <div style={{ padding: "1rem" }}>
        <Row type="flex" justify="center">
          <Col xs={24} lg={20}>
            <Row type="flex" justify="center">
              <Col span={4}>
                <Link href="/">
                  <img
                    src="/assets/logo.jpg"
                    alt=""
                    width={60}
                    height={60}
                    className="cursor-pointer"
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

            <ProductosIphone />
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
