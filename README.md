<p align="center">
<img width="128" src="https://raw.githubusercontent.com/qallen028/ZyPlayer/main/logo.png" >
</p>
<p align="center">
<a href="https://github.com/qallen028/ZyPlayer/issues" target="_blank">反馈</a>
<a href="https://github.com/qallen028/ZyPlayer/releases" target="_blank">下载</a>
<a href="https://wwza.lanzoup.com/iOFNA10ge11e" target="_blank">蓝奏云</a>【密码：1eiw】
<a href="https://fast.uc.cn/s/ff2d76159d204" target="_blank">UC网盘</a>【密码：AWKA】
</p>

<h1 align="center">永恒国度</h1>

### 备注

源码关联太多的后端部分，同时也不想影响自己的服务器，所以不太方便放出

### 描述

基于 uniapp 开发。

### 功能

- 平台支持 Android
- 适配黑暗模式
- 支持资源站 cms接口（json格式 xml格式）
- 支持直播源 genre m3u
- 多种播放器 (西瓜视频播放器 腾讯云播放器)
- ...

### 声明

- 请大家支持正版. 所有资源来自网上, 该软件不参与任何制作, 上传, 储存等内容, 禁止传播违法资源.
- 该软件仅供学习交流使用，禁止个人用于非法商业用途, 请于安装后 24 小时内删除.


### 格式

> 资源站格式
```json
[
  {
        "key": "闪电资源",
        "name": "闪电资源",
        "api": "https://sdzyapi.com/api.php/provide/vod/at/xml/",
        "download": "",
        "jiexiUrl": "",
        "group": "影视",
        "isActive": true,
        "reverseOrder": false,
        "status": true,
        "method": "post",
        "format": "xml",
        "searchable": true
    }
  ]
```
> 直播源格式
```json
[
  {
        "id":"12",
        "key": "Ray直播",
        "name": "Ray直播",
        "url": "https://ghproxy.com/https://raw.githubusercontent.com/dxawi/0/main/tvlive.txt",
        "epg": "http://epg.112114.xyz",
        "group": "默認",
        "isActive": true,
        "status": true,
        "method": "get"
    }
  ]
```


###  截图

|                           影视 (首页)                           |                             影视 (搜索)                             |
| :-------------------------------------------------------------: | :-----------------------------------------------------------------: |
| ![影视.png](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230505-163836.png) | ![影视搜素.png](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230505-163909.png) |
|                           影视 (播放)                           |                             影视 (介绍)                             |
| ![影视播放](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230505-163855.png) |   ![影视详情](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230505-163843.png)   |
|                          直播(首页)                           |                                直播(播放)                            |
|  ![直播首页](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230517-112725.png) |  ![直播播放](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230517-112957.png)   |
|                            历史记录                             |                                收藏                                 |
| ![历史.png](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230505-163953.png) |     ![收藏](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230505-164000.png)     |
 
