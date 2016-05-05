##1、新建项目
react-native init ReactNativeSample
##2、安装Tab-navigator
https://github.com/exponentjs/react-native-tab-navigator
npm install react-native-tab-navigator --save
##3、FileWatch参数修改
 修改node_modules\react-native\node_modules\node-haste\lib\FileWatcher\index.js
 MAX_WAIT_TIME的值增加一个零
 否则修改完js后手机上的应用不刷新
##4、启动js服务器
npm start
##5、发布到手机
最好用真机，如果用模拟器，要用genymotion搭配VirtualBox-4.3.10
react-native run-android
##6、修改调试地址参数
真机上需要改，首先打开Wifi，按手机菜单键，选Dev Sdettings最好一项，地址填js服务器IP:8081

##参考项目
http://www.1ke.co/course/269 <br>
https://github.com/vczero/React-Native-App <br>
https://www.google.com/design/icons/