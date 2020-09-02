## TypeScript基础内容

### 背景信息

- typescript 是 javascript 的超集
- ts 基于 js 建立，并添加新的特征属性，最终形成ts
- browser 不能运行 ts，node 也不能运行 ts
- 通过将ts编译成js，来运行ts代码

### 优势

- 通过**类型**标注避免js的逻辑错误，同时写出错误更少的代码
- 能够有下一代js的特征，同时能编译出老版本的浏览器支持的js代码
- 有js没有的特征，类似interface，泛型
- 元编程特征，如装饰器
- 丰富的配置选择

### TS常见问题

https://juejin.im/post/5e33fcd06fb9a02fc767c427

### JS之外的特征（关键字）

1. Tuple（元组），数组长度内容类型确定了的数组

   ```javascript
   let a: [number, string]
   a = [1, 'jack']
   a = [2, 'rick', 2] // type is not assignable
   ```

2. Enum（枚举），能够根据前一个元素的值递增，也可自定义

   ```javascript
   enum Direction {
     Up = 1,
     Down = -1,
     Left = -2,
     Right = 2,
   }
   Direction.Up
   ```

3. Any（任意），数据类型可以是任意的，个人感觉没太大意义，在泛型中可以发挥作用

   ```javascript
   clientSync: {
       syncGameReady: () => Promise<any>;
       syncLevelResult: () => Promise<any>;
       syncSectionResult: () => Promise<any>;
       syncGameSuccess: () => Promise<any>;
       syncLiveGameResultAnswer: () => Promise<any>;
       syncPlayQuestionButton: (id: string) => Promise<any>;
     };
   ```

4. Type，定义新类型，给类型取个新名字，可用于联合类型。

   ```javascript
   type strs = string
   const s: strs = 'hello'
   type strf = () => string
   type str = strf | strs
   const union: str = 'union'
   const func: str = () => 'hello'
   ```

5. interface https://juejin.im/post/5c8fbf516fb9a070d8781b3c

   他可以包含一些普通属性，可以设置可读属性（readonly）、可选属性（？）

   

### 特殊关键字

1. 类型断言 as

   直接指定一个变量的类型

2. keyof

   将一个类型应设为其全部成员的名称的联合类型

   ``` typescript
   interface Person {
       name: string,
       age: number,
       location:string
   }
   type K1 = keyof Person; // "name"|"age"|'location'
   type K2 = keyof Person[];  // "length" | "push" | "pop" | "concat" |...
   type K3 = keyof { [x: string]: Person };  // string
   ```

3. in 

   能遍历

### 索引

typescript支持两种索引

> 数字索引
>
> 字符串索引

可以同时使用这两种索引，<font color=#849392>但是数字索引的返回值必须是字符串索引的返回值类型的子类型</font>，这是因为使用number类型的进行索引时，js会默认将他转换成string类型。

```typescript
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
```



我最近在学typescript，看了装饰器这部分的内容，就是在看代码的时候

``` typescript
@Component({
  components: {
    Icon,
  },
})
```

我就找Component的定义，发现

```typescript
declare function Component<V extends Vue>(options: ComponentOptions<V> & ThisType<V>): <VC extends VueClass<V>>(target: VC) => VC;
```

它就是一个声明的函数，我不清楚它在哪里实现的，怎么发挥作用的，所以想问下