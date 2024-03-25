import { FC } from "react";
import { Nav } from "./nav";

export const HomePage: FC = () => {
  return (
    <div>
      <h1>首页</h1>
      <Nav />
      <div style={{ marginTop: 16 }}>自定义全局配置 HOHO_MY_ENV：{HOHO_CONFIG.MY_ENV}</div>
    </div>
  );
};
