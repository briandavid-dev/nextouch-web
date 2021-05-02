import { useEffect, useState } from "react";
import { Row, Col, Divider, Carousel } from "antd";
import BarraProductos from "../common/BarraProductos";
import jsonXiaomi from "../../config/xiaomi.json";

const ProductosXiaomi = () => {
  const [dataXiaomi, setDataXiaomi] = useState([]);

  useEffect(() => {
    setDataXiaomi(jsonXiaomi);
  }, []);

  return (
    <>
      <br />
      <Row type="flex" justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Divider orientation="left">Xiaomi ({dataXiaomi.length})</Divider>
        </Col>
        <Col xs={0} lg={24}>
          {dataXiaomi.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataXiaomi} items={[1, 2, 3, 4, 5]} />
              <BarraProductos data={dataXiaomi} items={[1, 6, 7, 8, 9]} />
              <BarraProductos data={dataXiaomi} items={[10, 11, 12, 13, 14]} />
              <BarraProductos data={dataXiaomi} items={[15, 16, 17, 18]} />
            </Carousel>
          )}
        </Col>
        <Col xs={24} lg={0}>
          {dataXiaomi.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataXiaomi} items={[1, 2]} />
              <BarraProductos data={dataXiaomi} items={[3, 4]} />
              <BarraProductos data={dataXiaomi} items={[5, 6]} />
              <BarraProductos data={dataXiaomi} items={[7, 8]} />
              <BarraProductos data={dataXiaomi} items={[9, 10]} />
              <BarraProductos data={dataXiaomi} items={[11, 12]} />
              <BarraProductos data={dataXiaomi} items={[13, 14]} />
              <BarraProductos data={dataXiaomi} items={[15, 16]} />
              <BarraProductos data={dataXiaomi} items={[17, 18]} />
            </Carousel>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductosXiaomi;
