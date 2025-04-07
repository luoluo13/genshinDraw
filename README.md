## 临时通知

或许是由于自身技术水平不足，我已经在现有的BUG上消耗了太多时间。

自2025.04.07起，该项目进入长期冷却。

具体恢复更新时间待定。

---



## 进入 js/config.js 配置人名.

![](https://github.com/cxcwing/genshinDraw/blob/master/img/1.png)

![](https://github.com/cxcwing/genshinDraw/blob/master/img/2.png)



## 项目原地址

[cxcwing/genshinDraw: 前端----模拟原神抽奖点名系统](https://github.com/cxcwing/genshinDraw)



## 项目二创地址

[luoluo13/genshinDraw: 原神抽卡点名系统.](https://github.com/luoluo13/genshinDraw)



## 二创

新增功能：

1. 新增了蓝色、紫色品质的抽卡视频，并按班级职位分类选择抽卡品质；
2. 略微修改了代码结构；
3. 添加格式转化工具，输入菜名一键转为js格式，提高名单更新效率。

计划更新：

​	左上角班级名字，点击后弹出自定义窗口，可自定义班级名字。

## BUG记录

### 	20250326

​		抽卡时有概率不显示名字，经过计算和测试，排除了数组越界问题。

​		经过测试，偶尔会出现抽到金色类名单却显示蓝色品质视频的情况，正在排查原因。

​		经过测试，宏观上，问题出在金色品质逻辑上。微观上，初步怀疑是最初设计videosrc的先后顺序问题。

​		下一步，计划排查视频链接选定的先后顺序。



## 协议

本项目基于 [WTFPL](https://en.wikipedia.org/wiki/WTFPL) 协议开源。



## 感谢

本项目原作者为[cxcwing](https://github.com/cxcwing)，[洛茗同学](https://github.com/luoluo13)在此基础上进行了第二次创作。感谢huangyafei先生为开源社区做出的贡献！



## 特别声明

由于原项目未声明开源协议，本项目并未获原作授权。二创作者已于2025年3月19日提交了二创申请。

若有侵权，请提交issue联系作者删除。
