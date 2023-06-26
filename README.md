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

| 登录 （登录可以使用备份功能） | 影视 | 搜索 |
| :-----------------------------------: | :--: |:---: |
| ![登录](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143044.png) | ![影视](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143143.png) | ![搜索](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-144457.png) |
| 豆瓣热门|影视源切换|影视简介|
|  ![豆瓣热门](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143154.png) | ![影视源切换](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143205.png) | ![影视简介](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143218.png) |
| 快速搜索和为你推荐 | 影视播放 | 多种播放器切换 |
|  ![快速搜索和为你推荐](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143242.png) | ![影视播放](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143302.png) | ![多种播放器切换](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-145005.png) |
| 海报分享 | 快速切换集数 | 电视直播 |
| ![海报分享](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143353.png) | ![快速切换集数](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143409.png) | ![电视直播](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143424.png) |
| 电视直播源切换 | 电视直播播放 | 用户中心 |
| ![电视直播源切换](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143430.png) | ![电视直播播放](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143447.png) | ![用户中心](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143556.png) |
| 历史记录 | 个人收藏 | 配置备份 
| ![历史记录](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143622.png) | ![个人收藏](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143629.png) | ![配置备份](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143640.png) |
| 配置备份还原 | 影视源配置 | 添加影视源 |
| ![配置备份还原](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143647.png) | ![影视源配置](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143701.png) | ![添加影视源](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143709.png) |
| 电视直播源配置 | 添加电视直播源 | 设置 |
| ![电视直播源配置](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143726.png) | ![添加电视直播源](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143731.png) | ![设置](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-143744.png) |
| 深色模式 | 我的反馈 | 反馈 |
| ![添加电视直播源](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-144009.png) | ![我的反馈](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-144049.png) | ![反馈](https://ghproxy.com/https://raw.githubusercontent.com/qallen028/ZyPlayer/main/Screenshot_20230626-144114.png) |
 
