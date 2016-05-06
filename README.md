##1、新建项目
react-native init ReactNativeSample
##2、安装Tab-navigator
https://github.com/exponentjs/react-native-tab-navigator <br>
npm install react-native-tab-navigator --save <br>
##3、安装simple-store
https://github.com/jasonmerino/react-native-simple-store <br>
npm install react-native-simple-store -save
##4、安装barcode-scanner
https://github.com/ideacreation/react-native-barcodescanner<br>
npm install rnpm -g <br>
npm install react-native-barcodescanner -save <br>
rnpm link react-native-barcodescanner
##5、FileWatch参数修改
 修改node_modules\react-native\node_modules\node-haste\lib\FileWatcher\index.js
 MAX_WAIT_TIME的值增加一个零
 否则修改完js后手机上的应用不刷新
##6、启动js服务器
npm start
##7、发布到手机
最好用真机，如果用模拟器，要用genymotion搭配VirtualBox-4.3.10
react-native run-android
##8、修改调试地址参数
真机上需要改，首先打开Wifi，按手机菜单键，选Dev Sdettings最好一项，地址填js服务器IP:8081

##参考项目
http://www.1ke.co/course/269 <br>
https://github.com/vczero/React-Native-App <br>
https://www.google.com/design/icons/ <br>
https://design.google.com/icons/ <br>
http://www.jianshu.com/p/ec4069314395