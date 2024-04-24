<p align="center">
<img width="128" src="https://raw.githubusercontent.com/qallen028/ZyPlayer/main/logo.png" >
</p>
<h1 align="center">永恒国度</h1>

### 备注

源码关联太多的后端部分，同时也不想影响自己的服务器，所以不太方便放出

### 描述

基于 uniapp 开发。

### 功能

- 平台支持 Android
- 适配黑暗模式
- 支持资源站 cms接口 v3App接口 v1App接口
- 支持直播源 genre m3u
- 多种播放器 
- ...

### 声明

- 请大家支持正版. 所有资源来自网上, 该软件不参与任何制作, 上传, 储存等内容, 禁止传播违法资源.
- 该软件仅供学习交流使用，禁止个人用于非法商业用途, 请于安装后 24 小时内删除.


### 格式

> 资源站格式
```json
[
  {
        "key": "淘片资源",// 唯一标识
        "name": "淘片资源",// 名称
        "api": "https://taopianapi.com/cjapi/mc10/vod/json/m3u8.html", // 请求接口
        "download": "",// 原zy遗留，已弃用
        "jiexiUrl": "",// 解析接口，会在播放地址前自动拼接
        "group": "json",// 分组
        "isActive": true,// 是否启用
        "reverseOrder": false,// 原zy遗留，已弃用
        "status": true,// 可用状态
        "method": "get",// 请求方式，get或post
        "format": "json",// 接口返回的格式
        "searchable": true,// 是否允许搜索
        "categories": "",// 自定义分类，控制分类的显示和排序
        "rmadUrl":""// 广告插槽接口,会在播放器显示去广告图标
    }
  ]
```
> 直播源格式
```json
[
  {
        "key": "Ray直播",// 唯一标识
        "name": "Ray直播",// 名称
        "url": "https://raw.githubusercontent.com/dxawi/0/main/tvlive.txt",// 请求地址
        "epg": "http://epg.112114.xyz",// pc端zy使用，暂时无用
        "group": "默認",// 分组
        "isActive": true,// 是否启用
        "status": true,// 可用状态
        "method": "get"// 请求方式，get或post
    }
  ]
```
> VIP解析源格式
```json
[
  {
          "key": "纯净",// 唯一标识
          "name": "纯净",// 名称
          "url": "https://im1907.top/?jx=",// 解析地址
          "isActive": true,// 是否启用
          "type": "web"// 使用方式 web网页 json接口
    }
  ]
```

> Alist源格式
```json
[
  {
        "key": "七米蓝",// 唯一标识
      	"name": "七米蓝",// 名称
      	"server": "https://al.chirmyram.com",// 请求地址
      	"startPage": "",// 开始目录
      	"search": false,// 暂时无用
      	"headers": null,// 暂时无用
      	"params": null,// 暂时无用
      	"isActive": true// 是否启用
    }
  ]
```

> 随性看源格式
```json
[
  {
        "key": "懒洋洋翻唱",// 唯一标识
        "name": "懒洋洋翻唱",// 名称
        "api": "http://www.yujn.cn/api/lyy.php",// 请求地址
        "isActive": true,// 是否启用
        "downable": true// 是否允许下载
    }
  ]
```

<summary>截图</summary>

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

