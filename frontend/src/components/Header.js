import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="home" icon={<MailOutlined />}>
        Home
      </Item>
      <Item key="register" icon={<AppstoreOutlined />}>
        <Link to="/register"> Register</Link>
      </Item>
      <Item key="login" icon={<AppstoreOutlined />}>
        Login
      </Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Setting">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
    </Menu>
  );
};

export default Header;
