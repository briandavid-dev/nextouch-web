import { useEffect, useState } from "react";
import { Row, Col, Divider, Carousel } from "antd";
import BarraProductos from "../common/BarraProductos";
import { celulares } from "../../config/celulares.json";

const ProductosIphone = () => {
  const [dataApple, setDataApple] = useState([]);

  useEffect(() => {
    setDataApple(celulares.filter((celu) => celu.marca === "Iphone"));
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
              <BarraProductos data={dataApple} items={[82, 80, 67, 71, 74]} />
              <BarraProductos data={dataApple} items={[61, 62, 63, 64, 65]} />
              <BarraProductos data={dataApple} items={[56, 57, 58, 59, 60]} />
              <BarraProductos data={dataApple} items={[51, 52, 53, 54, 55]} />
              <BarraProductos data={dataApple} items={[46, 47, 48, 49, 50]} />

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
              <BarraProductos data={dataApple} items={[82, 80]} />
              <BarraProductos data={dataApple} items={[67, 71]} />
              <BarraProductos data={dataApple} items={[74, 61]} />
              <BarraProductos data={dataApple} items={[62, 63]} />
              <BarraProductos data={dataApple} items={[64, 65]} />

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
