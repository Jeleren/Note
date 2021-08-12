[toc]



### This doc record some commands that I used in project

#### 	1. code analyze （cocos creator compile shell）

``` shell
#!/bin/bash
set -e
/Applications/CocosCreator.app/Contents/MacOS/CocosCreator --path ./ --build "platform=wechatgame;debug=false"
cd build/wechatgame
curl https://sf3-dycdn-tos.pstatp.com/obj/eden-cn/zlthqeh7uhuhpqbps/jssdk/bridge.js -o bridge.js
game=$(cat game.js)
echo "GameGlobal.ee = require('./bridge');" > game.js
echo "$game" >> game.js
tma-pack -c 
```

##### 1. ` #!/bin/bash`

​	写在shell脚本的开头，用来标识使用那种sh解释器来解释脚本，`/bin/bash`可以理解为解释器的路径，同样的也有`#!/bin/sh` 、`#!/bin/python`

##### 2. `set *`

​	主要用来处理shell运行异常，不进行set限制的话，shell脚本将会执行脚本中的每个逻辑

​	`set -u`能在shell脚本执行过程中遇到不存在的变量时停止执行

​	`set -e` 能在shell脚本运行出错的情况下立即终止执行

​	当脚本中存在管道命令时（foo | echo a）如果管道命令执行出现错误`set -e`会失效，这时候需要设置`set - o`

​	`set -x `用来在运行结果之前，先输出执行的那一行命令，对于调试脚本很有用

##### 3. 构建cocos应用

`/Applications/CocosCreator.app/Contents/MacOS/CocosCreator --path ./ --build "platform=wechatgame;debug=false"`

##### 4. curl -o

​	curl 是常用的命令行工具，用来请求web服务器[curl的用法指南](ruanyifeng.com/blog/2019/09/curl-reference.html)，很多参数用来设置网络请求时的数据

​	curl -o能将服务器的回应保存成文件，等同于wget命令

##### 5. 变量赋值

​	注：shell中的变量赋值时`=`左右不能出现空格

​	`game=$(cat game.js)`当代码中出现`$`时表示真正的值是它后面的表达式的返回结果，这行代码表示将game.js的内容赋给变量game

##### 6. echo

​	echo  > : `echo "GameGlobal.ee = require('./bridge')"` > game.js

​	这一行代码将会将字符串写到game.js中，并且是先清空game.js文件，后写入，即这行代码执行完，game.js中只有`GameGlobal.ee = require('./bridge')`这一行代码

​	echo >>: ` echo "$game">> game.js`

​	这行代码 将会把game变量的值写入到game.js文件中，且不会影响到game.js原来的内容

这里存在一个**重定向**的内容，> | >>，前者直接重定向（指向一个内容）；后者追加重定向，不会改变原始内容。

​	

​	



