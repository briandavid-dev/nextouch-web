import React from "react";
import Link from "next/link";

const BarraProductos = (props) => {
  const { dataApple } = props;

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            height: "200px",
          }}
        >
          <div style={{ textAlign: "center", width: "160px" }}>
            <img
              src={dataApple[0].imagenes[0]}
              alt=""
              width={120}
              height={120}
              style={{ display: "inline" }}
            />
            {dataApple[0].modelo}
          </div>
          <div style={{ textAlign: "center", width: "160px" }}>
            <img
              src={dataApple[1].imagenes[0]}
              alt=""
              width={120}
              height={120}
              style={{ display: "inline" }}
            />
            {dataApple[1].modelo}
          </div>
          <div style={{ textAlign: "center", width: "160px" }}>
            <img
              src={dataApple[2].imagenes[0]}
              alt=""
              width={120}
              height={120}
              style={{ display: "inline" }}
            />
            {dataApple[5].modelo}
          </div>
          <div style={{ textAlign: "center", width: "160px" }}>
            <img
              src={dataApple[3].imagenes[0]}
              alt=""
              width={120}
              height={120}
              style={{ display: "inline" }}
            />
            {dataApple[3].modelo}
          </div>
          <div
            style={{
              textAlign: "center",
              width: "160px",
            }}
          >
            <img
              src={dataApple[4].imagenes[0]}
              alt=""
              width={120}
              height={120}
              style={{ display: "inline" }}
            />
            {dataApple[4].modelo}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarraProductos;
