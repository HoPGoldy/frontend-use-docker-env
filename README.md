# frontend-use-docker-env

前端使用 docker env 环境变量配置的 demo 示例项目

## 如何使用

**启动 mock 后端**

启动后可以直接访问 [http://localhost:3001/profile](http://localhost:3001/profile) 来查看接口响应。

```bash
npm run mocks
```

**启动前端开发环境**

启动后可以查看本地的开发环境变量是否正确设置

```bash
npm run dev
```

**打包前端项目**

```bash
npm run build
```

**构建纯净 docker 镜像**

```bash
docker build -t frontend-use-docker-env .
```

**运行前端镜像并指定环境变量**

根目录下运行，访问 [http://localhost:8080](http://localhost:8080) 查看效果

```bash
docker run -p 8080:80 -e HOHO_BASE_URL= -e HOHO_MY_ENV=prod-env-value -e HOHO_BACKEND_URL=http://host.docker.internal:3001/ frontend-use-docker-env
```

二级目录下运行，访问 [http://localhost:8080/app1](http://localhost:8080/app1) 查看效果

```bash
docker run -p 8080:80 -e HOHO_BASE_URL=/app1 -e HOHO_MY_ENV=prod2-env-value -e HOHO_BACKEND_URL=http://host.docker.internal:3001/ frontend-use-docker-env
```

注意部署到根目录时，`HOHO_BASE_URL` 要留空而不是填 `/`，填 `/` 会导致 nginx 解析 lcoation 有问题。
