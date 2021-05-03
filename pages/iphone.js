import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Row, Col, Button, Image, Carousel } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import Head from "next/head";
import css from "styled-jsx/css";
import jsonIphone from "../config/iphone.json";
import MenuBar from "../components/Header/MenuBar";
import Footer from "../components/Footer";

const stylesCss = css.global``;

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  const [dataProductos, setDataProductos] = useState([]);

  useEffect(() => {
    if (name) {
      setDataProductos(jsonIphone);
    }
  }, [name]);

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

        <title>Online</title>
      </Head>
      <div style={{ padding: "1rem" }}>
        <Row type="flex" justify="center">
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
              <Col xs={24} lg={7}>
                carrucel
              </Col>
              <Col xs={24} lg={17}>
                hola
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <Row type="flex" justify="center">
          <Col xs={24} lg={20}>
            IPHONE
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Post;