import { useEffect, useState } from "react";
import { Row, Col, Divider, Carousel } from "antd";
import BarraProductos from "../common/BarraProductos";
import jsonAlcatel from "../../config/alcatel.json";

const ProductosAlcatel = () => {
  const [dataAlcatel, setDataAlcatel] = useState([]);

  useEffect(() => {
    setDataAlcatel(jsonAlcatel);
  }, []);

  return (
    <>
      <br />
      <Row type="flex" justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Divider orientation="left">Alcatel ({dataAlcatel.length})</Divider>
        </Col>
        <Col xs={0} lg={24}>
          {dataAlcatel.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataAlcatel} items={[1, 2]} />
            </Carousel>
          )}
        </Col>
        <Col xs={24} lg={0}>
          {dataAlcatel.length > 0 && (
            <Carousel effect="fade">
              <BarraProductos data={dataAlcatel} items={[1, 2]} />
            </Carousel>
          )}
        </Col>
      </Row>
    </>
  );
};

export default ProductosAlcatel;
