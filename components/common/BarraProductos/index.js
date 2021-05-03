import React from "react";
import Link from "next/link";

const BarraProductosItem = (props) => {
  const { data, item } = props;
  const item_ = item - 1;

  return (
    <Link href={data[item_].modelo.replaceAll(" ", "-")}>
      <div
        style={{ textAlign: "center", width: "160px" }}
        className="cursor-pointer hover-product"
      >
        <img
          src={data[item_].imagenes[0]}
          alt=""
          width={120}
          height={120}
          style={{ display: "inline" }}
        />
        <p>
          <small>{data[item_].marca}</small>
          <br />
          <strong>{data[item_].modelo}</strong>
          <br />
          {data[item_].precio !== "" && <>${data[item_].precio}</>}
        </p>
      </div>
    </Link>
  );
};

const BarraProductos = (props) => {
  const { data, items } = props;

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
          {items.map((item, key) => (
            <BarraProductosItem data={data} item={item} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BarraProductos;
