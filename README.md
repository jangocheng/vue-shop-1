一、技术栈：vue-cli2 + vue2.0 + vue-router + vuex + axios + stylus + scss + node.js + es6 + express + mysql

二、文件说明：server文件夹为后端部分，其他文件为前端部分

三、线上环境
直接将dist文件夹部署到线上服务器即可访问

四、本地运行
#下载Node.js 
官网：https://nodejs.org/zh-cn/

# 安装依赖：
在命令行操作
vue:
cd vueMall-master(进入项目文件下)
npm install （安装依赖）

express:(进入项目文件下)
cd server
npm install（安装依赖）

# 本地开发，开启服务器，浏览器访问http://localhost:8081，
手机和电脑连同一个局域网，手机浏览器输入http://电脑IP:8081即可在手机上访问

vue:
npm run dev

express:
node bin\www

# 构建生产
npm run build（生成dist文件夹）
注：第一次使用vue和express全局安装vue-cli和express

vue-cli

键入命令：npm install -g vue-cli

express

键入命令：npm i -g express-generator
