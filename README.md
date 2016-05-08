##0、React Native开发环境配置可参见根目录下的《React Native for Android实践.doc》
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
##9、打包成APK
参照
http://www.lcode.org/%E3%80%90react-native%E5%BC%80%E5%8F%91%E3%80%91react-native%E8%BF%9B%E8%A1%8C%E7%AD%BE%E5%90%8D%E6%89%93%E5%8C%85%E6%88%90apk/ <br>
##需要注意的问题
1、keytool是jdk带的工具 <br>
2、修改一个超时设置 <br>
node_modules\react-native\packager\react-packager\src\SocketInterface\index.js第22行的CREATE_SERVER_TIMEOUT，后面加个零 <br>
3、缩小Release APK的大小 <br>
  (1)修改app\build.gradle第90行，将abiFilters "armeabi-v7a", "x86"的, "x86"去掉，只保留arm平台的 <br>
  (2)修改app\build.gradle第77行，将def enableProguardInReleaseBuilds 的值改成true

##参考项目
http://www.1ke.co/course/269 <br>
https://github.com/vczero/React-Native-App <br>
https://www.google.com/design/icons/ <br>
https://design.google.com/icons/ <br>
http://www.jianshu.com/p/ec4069314395 