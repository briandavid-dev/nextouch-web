import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const MenuBar = () => {
  const [state, setState] = useState({
    current: "mail",
  });

  const { current } = state;

  const handleClick = (e) => {
    console.log("click ", e);
    setState({ current: e.key });
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="iphone">
        <Link href="/iphone">Iphone</Link>
      </Menu.Item>

      <Menu.Item key="samsung">Samsung</Menu.Item>
      <Menu.Item key="xiaomi">Xiaomi</Menu.Item>
      <Menu.Item key="alcatel">Alcatel</Menu.Item>
    </Menu>
  );
};

export default MenuBar;
