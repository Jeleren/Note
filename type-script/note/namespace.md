1. namespace 的用意

   之前会采用立即执行函数来去确保变量不会泄露至全局中，基于模块的项目解决了这个缺点，适合用于合理的函数逻辑分组中，在 typescript 中使用 namespace 关键字来描述这种分组模块，命名空间也会被编译成立即执行函数。

2. namespace 的声明

   namespace 只对外暴露需要再外部访问的对象，通过 export 实现

   ```typescript
   // index.d.ts
   declare namespace World {
     export interface IAnimal {}
   }
   ```

3. namespace 的使用

   在命名空间外需要通过完全限定名访问这些对象（即对象引用的方式）

   ```typescript
   /// <reference path="../index.d.ts" />

   export default class Animal {
     public basicAttributes: World.IAnimal;
   }
   ```

   通过注释引用命名空间，即可通过完全限定名进行访问，也可以通过`import` 导入模块的形式，引入命名空间：

   ```typescript
   import "../index";

   export default class Animal {
     public basicAttributes: World.IAnimal;
   }
   ```
