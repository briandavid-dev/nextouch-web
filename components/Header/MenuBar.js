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
    // console.log("click ", e);
    setState({ current: e.key });
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="iphone">
        <Link href="/iphone">Iphone</Link>
      </Menu.Item>

      <Menu.Item key="samsung">
        <Link href="/samsung">Samsung</Link>
      </Menu.Item>

      <Menu.Item key="xiaomi">
        <Link href="/xiaomi">Xiaomi</Link>
      </Menu.Item>

      <Menu.Item key="alcatel">
        <Link href="/alcatel">Alcatel</Link>
      </Menu.Item>

      <Menu.Item key="iphone-al-mayor">
        <Link href="/iphone-al-mayor">Iphone al Mayor</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
