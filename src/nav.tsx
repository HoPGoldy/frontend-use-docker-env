import { FC } from "react";
import { Link } from "react-router-dom";

export const Nav: FC = () => {
  return (
    <div>
      <Link to="/">跳转至首页</Link>
      <Link to="/pageA/detail/1">跳转至详情页</Link>
    </div>
  );
};
