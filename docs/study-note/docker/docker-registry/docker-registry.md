# Docker Registry(仓库)

## 搭建私有镜像仓库

### 服务端

**快速启动简单 Registry**

docker 官方提供能一个镜像可用于搭建 docker 私有仓库

```sh
# 创建容器数据卷
mkdir -p /root/data/registry

# 运行 Registry 容器
docker run -d \
  -p 5000:5000 \
  --name registry \
  --restart=always \
  -v /root/data/registry:/var/lib/registry \
  registry:latest

# 查看容器状态
docker ps

# 访问 HTTP API 以查看仓库中的镜像
curl http://<registry_address>:5000/v2/_catalog
```

### 客户端

**添加可信任仓库**

编辑 `/etc/docker/daemon.json`, 添加以下内容

```json
"insecure-registries": ["<registry_address>:5000"]
```

**推送到私有仓库**

以 `hello-world` 镜像为例

```sh
# 拉取 hello-world 镜像
docker pull hello-world:latest

# 标记镜像
docker tag hello-world:latest <registry_address>:5000/hello-world:latest

# 推送镜像
docker push <registry_address>:5000/hello-world:latest
```

### 生产环境

**部署 hello-world**

在生产服务器上执行下面的命令就可以拉取 `registry_address:5000` 仓库中的 `hello-world` 镜像并运行为容器

```sh
# 运行私有仓库的 hello-world 镜像
docker run <registry_address>:5000/hello-world:latest
```

容器成功运行说明应用已部署至生产环境
