# Docker image(镜像)

## 搜索镜像

使用下面的命令可以搜索 Docker Hub 上的镜像

```sh
# 根据镜像名称搜索
docker search <image_name>
```

例如：搜索 nginx 镜像

```sh
docker search nginx
```

上面的命令输出结果如下

命令结果展示了镜像的 `NAME(镜像名称)`, `DESCRIPTION(描述)`, `STARS(镜像stars数量)` 和 `OFFICIAL(是否为官方镜像)` 几个属性

```
root@hongkong:~# docker search nginx
NAME                                     DESCRIPTION                                     STARS     OFFICIAL
nginx                                    Official build of Nginx.                        21145     [OK]
nginx/nginx-ingress                      NGINX and  NGINX Plus Ingress Controllers fo…   111
nginx/nginx-prometheus-exporter          NGINX Prometheus Exporter for NGINX and NGIN…   50
nginx/unit                               This repository is retired, use the Docker o…   65
nginx/nginx-ingress-operator             NGINX Ingress Operator for NGINX and NGINX P…   3
nginx/nginx-quic-qns                     NGINX QUIC interop                              1
nginx/nginxaas-loadbalancer-kubernetes                                                   1
nginx/unit-preview                       Unit preview features                           0
bitnami/nginx                            Bitnami Secure Image for nginx                  202
```

## 列出镜像

使用下面的命令可以列出设备上的 docker 镜像

```sh
docker images
```

## 拉取镜像

使用下面的命令可以从 docker 仓库中拉取镜像

```sh
# image_name 为镜像的名称, tag 为镜像的标签, 如果不写 tag 默认会使用 latest 标签
docker pull <image_name:tag>
```

## 删除镜像

使用下面的命令可以删除指定的镜像

```sh
# 根据镜像 ID 删除镜像
docker rmi <image_id>

# 强制删除
docker rmi -force <image_id>
```

## 镜像标签

一个完整的镜像名称应该具备 `[HOST:[POST_NUMBER]/PATH]` 这样的格式

* `HOST`： docker 仓库的主机地址，可以是`registry.docker.io` 这样的域名，也可以是 `192.168.1.11` 这样的 IP 地址，只要是正确的 docker 仓库地址就可以

* `POST_NUMBER`：端口号，如果 docker 仓库的主机地址存在端口号，则需要填写端口号，例如：`192.168.1.11:5000` 这样具体的 docker 仓库地址

* `/`：需要使用斜杠分隔镜像名称的各个组成部分

* `PATH`：其实就是镜像名称，这一部分只能包含 `小写字母`, `数字` 和 `分隔符号(-)`

使用下面的命令可以为一个镜像添加标签

```sh
# source_image 为源镜像，就是我们要添加标签的镜像
# target_image 为目标镜像，就是我们添加标签后的镜像
docker tag <source_image:tag> <target_image:tag>
```

例如：为 nginx 镜像添加标签

```sh
# 192.168.1.11:5000 就是 docker 仓库的地址
docker tag nginx 192.168.1.11:5000/nginx:v1
```

## 推送镜像

在为镜像添加标签后，我们可以使用下面的命令将镜像推送至 docker 仓库中

例如：推送上面的 `192.168.1.11:5000/nginx:v1` 镜像

```sh
docker push 192.168.1.11:5000/nginx:v1
```

## 构建镜像

构建镜像需要依赖 `Dockerfile` 文件，`Dockerfile` 的内容会单独写在一篇笔记里面

我们这里暂时只需要知道使用下面的命令可以构建镜像

```sh
# 使用 -t 参数指定镜像名称
# . 最后的 . 表示上下文环境
docker build -t <image_name:tag> . 
```
