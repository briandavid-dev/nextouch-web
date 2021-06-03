import { useState, useEffect } from "react";
import Link from "next/link";
import { Row, Col, Divider } from "antd";
import Head from "next/head";
import css from "styled-jsx/css";
import jsonIphone from "../config/iphoneAlMayor.json";
import MenuBar from "../components/Header/MenuBar";
import Footer from "../components/Footer";
import { BarraProductosItem } from "../components/common/BarraProductos";

const stylesCss = css.global``;

const Post = () => {
  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    setDataProductos(jsonIphone);
  }, []);

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

        <title>Iphone al mayor | nextouchonline.com</title>
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
                <h1>Iphone al mayor</h1>

                <p>
                  Condiciones:
                  <br />- A partir de 5.
                  <br />- Handset (solo teléfono sin caja ni accesorios y usados
                  tipo A)
                </p>
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
