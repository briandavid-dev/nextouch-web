import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Row, Col, Button, Image, Carousel } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";
import Head from "next/head";
import css from "styled-jsx/css";
import jsonIphone from "../config/iphone.json";
import jsonXiaomi from "../config/xiaomi.json";
import jsonSamsung from "../config/samsung.json";
import jsonAlcatel from "../config/alcatel.json";
import iphoneAlMayor from "../config/iphoneAlMayor.json";
import MenuBar from "../components/Header/MenuBar";
import ProductosIphone from "../components/Home/ProductosIphone";
import ProductosSamsung from "../components/Home/ProductosSamsung";
import ProductosXiaomi from "../components/Home/ProductosXiaomi";
import ProductosAlcatel from "../components/Home/ProductosAlcatel";
import Footer from "../components/Footer";

const celularesMerge = [
  ...jsonIphone,
  ...jsonXiaomi,
  ...jsonSamsung,
  ...jsonAlcatel,
  ...iphoneAlMayor,
];

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
    info: [],
  });

  useEffect(() => {
    if (name) {
      setDataProducto(
        celularesMerge.find((celu) => celu.modelo === name.replaceAll("-", " "))
      );
    }
  }, [name]);

  const renderBarraMarca = (marca) => {
    let retVal = null;

    if (marca === "Iphone") {
      retVal = <ProductosIphone />;
    } else if (marca === "Samsung") {
      retVal = <ProductosSamsung />;
    } else if (marca === "Xiaomi") {
      retVal = <ProductosXiaomi />;
    } else if (marca === "Alcatel") {
      retVal = <ProductosAlcatel />;
    }

    return retVal;
  };

  return (
    <>
      <style jsx global>
        {stylesCss}
      </style>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equivhttpEquiv="X-UA-Compatible" content="IE=edge" />
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
                <br />
                {dataProducto.precio ? (
                  <h4 style={{ color: "#23A34E" }}>${dataProducto.precio}</h4>
                ) : (
                  <br />
                )}
                <div
                  style={{
                    backgroundColor: "#F5F5F7",
                    padding: "1rem",
                    borderRadius: "3px",
                  }}
                >
                  {dataProducto.info.map((info) => (
                    <>
                      {info}
                      <br />
                    </>
                  ))}
                </div>
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
        <br />
        <br />
        <Row type="flex" justify="center">
          <Col xs={24} lg={20}>
            {renderBarraMarca(dataProducto.marca)}
          </Col>
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Post;
