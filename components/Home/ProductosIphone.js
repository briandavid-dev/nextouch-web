import { useEffect, useState } from "react";
import { Row, Col, Divider, Carousel } from "antd";
import BarraProductos from "../common/BarraProductos";
import jsonIphone from "../../config/iphone.json";

const ProductosIphone = () => {
  const [dataApple, setDataApple] = useState([]);

  useEffect(() => {
    setDataApple(jsonIphone);
  }, []);

  return (
    <>
      <br />
      <Row type="flex" justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Divider orientation="left">Iphone ({dataApple.length})</Divider>
        </Col>
        <Col xs={0} lg={24}>
          {dataApple.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataApple} items={[46, 40, 25, 31, 37]} />

              <BarraProductos data={dataApple} items={[41, 42, 43, 44, 45]} />
              <BarraProductos data={dataApple} items={[36, 37, 38, 39, 40]} />
              <BarraProductos data={dataApple} items={[31, 32, 33, 34, 35]} />
              <BarraProductos data={dataApple} items={[26, 27, 28, 29, 30]} />

              <BarraProductos data={dataApple} items={[21, 22, 23, 24, 25]} />
              <BarraProductos data={dataApple} items={[16, 16, 18, 19, 20]} />
              <BarraProductos data={dataApple} items={[11, 12, 13, 14, 15]} />
              <BarraProductos data={dataApple} items={[6, 7, 8, 9, 10]} />

              <BarraProductos data={dataApple} items={[1, 2, 3, 4, 5]} />
              <BarraProductos data={dataApple} items={[6, 7, 8, 9, 10]} />
              <BarraProductos data={dataApple} items={[11, 12, 13, 14, 15]} />
              <BarraProductos data={dataApple} items={[16, 17, 18, 19, 20]} />
            </Carousel>
          )}
        </Col>
        <Col xs={24} lg={0}>
          {dataApple.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataApple} items={[40, 39]} />
              <BarraProductos data={dataApple} items={[28, 37]} />
              <BarraProductos data={dataApple} items={[35, 34]} />
              <BarraProductos data={dataApple} items={[25, 20]} />
              <BarraProductos data={dataApple} items={[19, 31]} />

              <BarraProductos data={dataApple} items={[13, 14]} />
              <BarraProductos data={dataApple} items={[11, 12]} />
              <BarraProductos data={dataApple} items={[9, 10]} />
              <BarraProductos data={dataApple} items={[7, 8]} />
              <BarraProductos data={dataApple} items={[5, 6]} />
              <BarraProductos data={dataApple} items={[3, 4]} />
              <BarraProductos data={dataApple} items={[1, 2]} />
            </Carousel>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductosIphone;
