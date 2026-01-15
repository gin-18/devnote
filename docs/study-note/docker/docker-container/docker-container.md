# Docker Container(容器)

## 列出容器

使用下面的命令可以列出设备上的容器

```sh
# 列出正在运行的容器
docker ps

# 列出所有容器
docker ps -a

# 仅显示容器 ID
docker ps -q
```

命令列出的结果如下

```
# 容器 ID      # 镜像名称                                                   # 容器创建时间 # 容器状态                # 端口信息                              # 容器名称
CONTAINER ID   IMAGE                               COMMAND                  CREATED        STATUS                    PORTS                                   NAMES
59e276256e6a   47.76.116.253:5000/devnote          "/docker-entrypoint.…"   11 hours ago   Up 6 seconds              0.0.0.0:8080->80/tcp, :::8080->80/tcp   my-devnote-02
89366fd0ec45   47.76.116.253:5000/devnote:latest   "/docker-entrypoint.…"   17 hours ago   Exited (0) 11 hours ago                                           my-devnote-01
```

## 运行容器

使用 `docker run` 命令可以将一个镜像运行为容器

`docker run` 命令提供了非常多的参数，一般需要根据具体的应用的部署方式使用合适的命令参数

这里先列出一些常用的参数，更多的参数可以在 [docker docs](https://docs.docker.top/reference/cli/docker/container/run/index.htm) 查看

| 参数   | 描述                                                       |
| ------ | ---------------------------------------------------------- |
| -d     | 在后台运行容器并打印容器 ID                                |
| -i     | 以交互的方式运行容器                                       |
| -t     | 给容器分配一个伪 TTY, 常用 -i 参数一起使用，一般就写为 -it |
| -v     | 挂载容器数据卷                                             |
| -p     | 小写的 p， 指定端口以映射容器内的端口到宿主机              |
| -P     | 大写的 p， 将容器内的所有使用的端口到随机映射到宿主机      |
| --name | 为容器分配名称                                             |

下面会使用 `nginx:alpine` 镜像演示各个参数的使用

**`-d` 参数**

我们先只使用 `-d` 参数简单地运行 `nginx:alpine` 容器

```sh
# 后台运行 nginx:alpine 容器
docker run -d nginx:alpine
```
查看容器可以看到已经有 nginx 容器启动，并且容器内的端口是80

```
CONTAINER ID   IMAGE          COMMAND                  CREATED         STATUS         PORTS     NAMES
a9282fd492e4   nginx:alpine   "/docker-entrypoint.…"   5 seconds ago   Up 3 seconds   80/tcp    busy_wright
```

但是， 现在我们无法通过 `宿主机ip:80` 访问 nginx 容器内的应用的

这是因为容器环境完全与宿主机隔离，我们使用的 `docker run -d nginx:alpine` 命令并没有将容器内的80端口映射给宿主机，所以我们现在是访问不到 nginx 容器中的应用的

**`-p` 参数** 



## 创建容器

使用 `docker create` 命令来创建一个容器，但不启动它

```sh
docker create <image:tag>
```

例如：创建 nginx 容器，但不启动

```sh
# 创建容器
docker create nginx:alpine

# 查看容器
docker ps -a
```

从以下的查看结果可以看到，使用 `docker create` 命令创建的容器，其 `STATUS` 为 `CREATE`

```
CONTAINER ID   IMAGE                               COMMAND                  CREATED          STATUS                      PORTS     NAMES
5e9c07cef0a1   nginx:alpine                        "/docker-entrypoint.…"   5 seconds ago    Created                               focused_gould
ed8a7ba1f71e   nginx:alpine                        "/docker-entrypoint.…"   20 minutes ago   Exited (0) 18 minutes ago             stupefied_bohr
```

## 停止容器

使用下面的命令可以停止正在运行的容器

```sh
# 可以指定容器 ID 或容器名称
docker stop <container_id>/<container_name>

# 停止 ID 为 59e276256e6a 的容器
docker stop 59e2

# 停止名为 my-nginx 的容器
docker stop my-nginx
```

## 启动容器

使用下面的命令可以启动停止运行的容器

```sh
docker start <container_id>/<container_name>
```

## 重启容器

使用下面的命令可以重新启动容器

```sh
docker restart <container_id>/<container_name>
```

## 重命名容器

使用下面的命令可以重命名容器

```sh
docker rename <old_container_name> <new_container_name>

# 例如：将 my-nginx 重命名为 gin-nginx
docker rename my-nginx gin-nginx
```
