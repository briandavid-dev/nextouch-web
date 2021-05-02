import { useEffect, useState } from "react";
import { Row, Col, Divider, Carousel } from "antd";
import BarraProductos from "../common/BarraProductos";
import jsonSamsung from "../../config/samsung.json";

const ProductosSamsung = () => {
  const [dataSamsung, setDataSamsung] = useState([]);

  useEffect(() => {
    setDataSamsung(jsonSamsung);
  }, []);

  return (
    <>
      <br />
      <Row type="flex" justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Divider orientation="left">Samsung ({dataSamsung.length})</Divider>
        </Col>
        <Col xs={0} lg={24}>
          {dataSamsung.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataSamsung} items={[18, 17, 16, 15, 14]} />
              <BarraProductos data={dataSamsung} items={[13, 12, 11, 10, 9]} />
              <BarraProductos data={dataSamsung} items={[8, 7, 6, 5, 4]} />
              <BarraProductos data={dataSamsung} items={[3, 2, 1]} />
            </Carousel>
          )}
        </Col>
        <Col xs={24} lg={0}>
          {dataSamsung.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataSamsung} items={[17, 18]} />
              <BarraProductos data={dataSamsung} items={[15, 16]} />
              <BarraProductos data={dataSamsung} items={[13, 14]} />
              <BarraProductos data={dataSamsung} items={[11, 12]} />
              <BarraProductos data={dataSamsung} items={[9, 10]} />
              <BarraProductos data={dataSamsung} items={[7, 8]} />
              <BarraProductos data={dataSamsung} items={[5, 6]} />
              <BarraProductos data={dataSamsung} items={[3, 4]} />
              <BarraProductos data={dataSamsung} items={[1, 2]} />
            </Carousel>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductosSamsung;
