import { useState, useEffect } from "react";
import Link from "next/link";
import { Row, Col } from "antd";
import Head from "next/head";
import css from "styled-jsx/css";
import jsonXiaomi from "../config/xiaomi.json";
import MenuBar from "../components/Header/MenuBar";
import Footer from "../components/Footer";
import { BarraProductosItem } from "../components/common/BarraProductos";

const stylesCss = css.global``;

const Post = () => {
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    setDataProductos(jsonXiaomi);
  }, []);

  return (
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;600;800&display=swap"
          rel="stylesheet"
        />

        <title>Xiaomi | nextouchonline.com</title>
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
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col xs={24} lg={20}>
            <Row gutter={[40, 40]}>
              <Col span={24}>
                <h1>Xiaomi </h1>
              </Col>
              {dataProductos.map((producto, key) => (
                <Col
                  key={key}
                  xs={12}
                  lg={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <BarraProductosItem data={dataProductos} item={key + 1} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Post;
