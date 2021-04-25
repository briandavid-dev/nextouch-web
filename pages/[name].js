import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Row, Col } from "antd";
import Head from "next/head";
import { celulares } from "../config/celulares.json";

const Post = () => {
  const router = useRouter();
  const { name } = router.query;

  const [dataProducto, setDataProducto] = useState({
    modelo: "",
    precio: "",
    marca: "",
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
                <pre>{JSON.stringify(dataProducto)}</pre>-
                <code>{JSON.stringify(dataProducto)}</code>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Post;
