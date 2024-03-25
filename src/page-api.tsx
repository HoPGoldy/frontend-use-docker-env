import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Nav } from "./nav";

const mergeUrl = (...path: string[]) => {
  return path.reduce((pre, cur) => {
    const endSlash = pre.endsWith("/");
    const startSlash = cur.startsWith("/");

    if (endSlash && startSlash) return pre + cur.substring(1);
    if (!endSlash && !startSlash) return pre + "/" + cur;
    return pre + cur;
  });
};

const axiosInstance = axios.create({
  baseURL: mergeUrl(location.origin, HOHO_CONFIG.PATH_BASENAME, "/webapi"),
});

export const ApiPage: FC = () => {
  const [backendMessage, setBackendMessage] = useState("加载中...");

  useEffect(() => {
    axiosInstance.get("profile").then((resp) => {
      setBackendMessage(resp.data.data);
    });
  }, []);

  return (
    <div>
      <h1>接口页</h1>
      <Nav />
      <div style={{ marginTop: 16 }}>接口响应：{backendMessage}</div>
    </div>
  );
};
