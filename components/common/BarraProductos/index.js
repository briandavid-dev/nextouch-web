import React from "react";
import Link from "next/link";

export const BarraProductosItem = (props) => {
  const { data, item, isHome } = props;
  const item_ = item - 1;

  return (
    <Link href={data[item_].modelo.replaceAll(" ", "-")}>
      <div
        style={{ textAlign: "center", width: isHome ? "160px" : "" }}
        className="cursor-pointer hover-product"
      >
        <img
          src={data[item_].imagenes[0]}
          alt=""
          width={isHome ? 120 : 220}
          height={isHome ? 120 : ""}
          style={{ display: "inline", maxWidth: "100%" }}
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
            <BarraProductosItem isHome data={data} item={item} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BarraProductos;
