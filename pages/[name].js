import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Row, Col, Button, Image, Carousel } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import Head from "next/head";
import css from "styled-jsx/css";
import { celulares } from "../config/celulares.json";
import MenuBar from "../components/Header/MenuBar";

const stylesCss = css.global`
  .ant-carousel .slick-dots li button {
    background: #23a34e;
  }
  .ant-carousel .slick-dots li.slick-active button {
    background: #23a34e;
    opacity: 1;
  }
`;

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  const [dataProducto, setDataProducto] = useState({
    modelo: "",
    precio: "",
    marca: "",
    imagenes: [1, 2],
  });

  useEffect(() => {
    if (name) {
      setDataProducto(
        celulares.find((celu) => celu.modelo === name.replaceAll("-", " "))
      );
    }
  }, [name]);

  return (
    <div>
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
              <Col xs={24} lg={7}>
                <Carousel>
                  <div>
                    <Image width="100%" src={dataProducto.imagenes[0]} />
                  </div>
                  <div>
                    <Image width="100%" src={dataProducto.imagenes[1]} />
                  </div>
                </Carousel>
              </Col>
              <Col xs={24} lg={17}>
                <strong>{dataProducto.marca}</strong>
                <br />
                <span style={{ fontSize: "20px" }}>{dataProducto.modelo}</span>
                <br />${dataProducto.precio}
                <br />
                <br />
                <a
                  href={`https://api.whatsapp.com/send?phone=17866160509&text=Hola, tengo una consulta para el ${dataProducto.modelo}`}
                  target="_blank"
                >
                  <Button
                    type="primary"
                    shape="round"
                    icon={<WhatsAppOutlined />}
                    size
                  >
                    Consultar
                  </Button>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Post;
