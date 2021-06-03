import { useEffect, useState } from "react";
import { Row, Col, Divider, Carousel } from "antd";
import BarraProductos from "../common/BarraProductos";
import iphoneAlMayor from "../../config/iphoneAlMayor.json";

const ProductosIphoneAlMayor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(iphoneAlMayor);
  }, []);

  return (
    <>
      <br />
      <Row type="flex" justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Divider orientation="left">Iphone al mayor ({data.length})</Divider>
        </Col>
        <Col xs={0} lg={24}>
          {data.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={data} items={[1, 9, 15, 22, 25]} />
              <BarraProductos data={data} items={[6, 7, 10, 9, 7]} />
              <BarraProductos data={data} items={[11, 12, 13, 14, 15]} />
              <BarraProductos data={data} items={[16, 17, 18, 19, 20]} />
              <BarraProductos data={data} items={[21, 22, 23, 24, 25]} />
              <BarraProductos data={data} items={[26, 27, 28, 29, 30]} />
              <BarraProductos data={data} items={[31, 32, 33, 34, 35]} />
              <BarraProductos data={data} items={[36, 37, 38, 39, 40]} />
              <BarraProductos data={data} items={[41, 42]} />
            </Carousel>
          )}
        </Col>
        <Col xs={24} lg={0}>
          {data.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={data} items={[1, 2]} />
              <BarraProductos data={data} items={[13, 14]} />
              <BarraProductos data={data} items={[11, 12]} />
              <BarraProductos data={data} items={[9, 10]} />
              <BarraProductos data={data} items={[7, 8]} />
              <BarraProductos data={data} items={[5, 6]} />
              <BarraProductos data={data} items={[3, 4]} />
            </Carousel>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductosIphoneAlMayor;
