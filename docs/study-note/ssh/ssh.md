# ssh

SSH(Secure Shell) 是一种网络协议, 主要用于在两个计算机之间实现安全的远程登录和远程控制

SSH 默认端口是 22

OpenSSH 作为 SSH 的开源实现, 提供了一些辅助工具(ssh-keygen, ssh-agent, ssh-add)和客户端工具(scp, sftp)

## 架构

SSH 的架构是服务器-客户端模式(Server-Client)

* 向服务器发送请求的部分称为客户端(Client)

* 接收客户端请求的部分称为服务器(Server)

## 基本使用

ssh 最常见功能就是登录远程服务器, 使用以下命令可以登录一台远程服务器

```bash
# user 为远程服务器的用户名, hostname 为远程服务器的主机名
ssh user@hostname

# user 为远程服务器的用户名, ip 为远程服务器的 IP 地址
ssh user@ip
```

第一次登录一台远程服务器时会提示以下信息

```bash
The authenticity of host '192.168.1.253 (192.168.1.253)' can't be established.
ED25519 key fingerprint is: SHA256:bi5zb6+ytinvAtxzADoCpEVzsiP9v5gZr09RERhV9YM
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

输入 `yes` 之后会自动连接到远程服务器

ssh 会将本机连接过的所有远程服务器的公钥都存储在本机的 `~/.ssh/known_hosts` 文件中, 这样下一次登录时就不会再提示了

ps: `~` 这个符号在 Linux 中代表当前用户的家目录, 与 `$HOME` 是等价的; 在 Windows 的 PowerShell 中 `$HOME` 也代表当前用户的家目录

使用以下命令可以删除保存在 `~/.ssh/known_hosts` 文件中的远程服务器的公钥

```bash
# hostname 为远程服务器的主机名
ssh-keygen -R hostname

# ip 为远程服务器的 IP 地址
ssh-keygen -R ip
```
## 密钥登录

SSH 密钥登录采用非对称加密, 其密钥对分为 `公钥` 和 `私钥`

* 私钥必须私密保存, 不能泄漏

* 公钥是公开的, 可以对外发送

### 生成密钥

使用 `ssh-keygen` 命令生成密钥对

```bash
# -t 指定密钥的加密算法; 一般会指定 dsa 或 rsa, 省略该参数时默认为 rsa
# -C 指定密钥的注释
ssh-keygen -t rsa -C "email@example.com"
```
此命令会在 `~/.ssh` 目录下生成 `id_rsa` 和 `id_rsa.pub` 两个文件, 其中 `id_rsa` 是私钥, `id_rsa.pub` 是公钥

### 公钥上传

OpenSSH 规定, 用户公钥保存在远程服务器的 `~/.ssh/authorized_keys` 文件中

**手动上传**

复制本地的公钥并粘贴到远程服务器的 `~/.ssh/authorized_keys` 文件中

**自动上传**

使用 `ssh-copy-id` 命令自动上传公钥

```bash
# user 为远程服务器的用户名, hostname 为远程服务器的主机名
ssh-copy-id user@hostname

# user 为远程服务器的用户名, ip 为远程服务器的 IP 地址
ssh-copy-id user@ip
```

`ssh-copy-id` 在 Windows 的 PowerShell 和 cmd 中都不可用, 但是可能在 `git-bash` 中是可用的, 如果 Windows 中安装了 `git-bash`, 可以尝试在 `git-bash` 中使用 `ssh-copy-id` 命令

### 关闭密码登录

启用密钥登录后, 可以关闭密码登录

对于 OpenSSH, 可以在服务器的配置文件 `/etc/ssh/sshd_config`  中将 `PasswordAuthentication` 改为 `no`

```
PasswordAuthentication no
```

## scp 命令

`scp` 命令用于用于在两台主机之间加密传送文件, 默认端口也是 22

### 本地文件复制到远程服务器

复制本地文件到远程服务器上

```bash
# local_file 为本地文件路径
# remote_user 为远程服务器的用户名
# remote_host 为远程服务器的主机名
# /path/to/remote_file 为远程服务器上的文件路径
scp local_file remote_user@remote_host:/path/to/remote_file
```

复制本地目录到远程服务器上, 使用 `-r` 参数

```bash
# local_dir 为本地目录路径
# remote_user 为远程服务器的用户名
# remote_host 为远程服务器的主机名
# /path/to/remote_dir 为远程服务器上的目录路径
scp -r local_dir remote_user@remote_host:/path/to/remote_dir
```

### 远程文件复制到本地

```bash
# 复制远程文件到本地
scp remote_user@remote_host:/path/to/remote_file /path/to/local_file

# 复制远程目录到本地
scp -r remote_user@remote_host:/path/to/remote_dir /path/to/local_dir
```

## sftp 命令

`sftp` 命令是 SSH 提供的一个客户端工具, 主要用于安全地访问 FTP

```bash
sftp remote_user@remote_host
```

`sftp` 登录后可以使用以下命令来操作远程服务器上的文件

* `ls` 列出远程服务器上的文件和目录

* `cd` 进入远程服务器上的目录

* `mkdir` 创建远程服务器上的目录

* `put /path/to/local_file /path/to/remote_file` 将本地文件上传到远程服务器上

* `get /path/to/remote_file /path/to/local_file` 将远程文件下载到本地服务器上
