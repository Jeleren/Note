// /**
//  * type 可以说是类型别名 type alias
//  * interface 就是接口
//  */
//
//  /**
//   * 相同点
//   * 1. 都可以定义对象，函数
//   * 2. 都可以extends和implements
//   */
//
//   // 1
//  interface IObj {
//      key: string
//      key1: number
//  }
//
//  type TObj = {
//      key: string
//      key1: number
//  }
//
//  // interface IFunc {
//  //     (name: string, age: number): void
//  // }
//
// // 形式比较特殊
// //  type TFunc1 = (name: string, age: number) => void
//
//  // 2
//  // interface IObj1 extends IObj {}
//  //
//  // interface IObj2 extends IObj {}
//
//  // 形式比较特殊
//  // type TObj1 = TObj & TFunc1
//
//
//  /**
//   * 不同点
//   * 1. type可以声明基本类型别名，联合类型，元组等
//   * 2. interface可以合并，两个interface可以和在一起
//   */
//
//   // 1
//   type s = string
//   const st: s = ''
//
//   type unin = string | number
//
//   type tupel = [s, unin]
//
//   // 2
//
//   // class 能实现interface和type
//   class A implements IObj {
//       key: string
//       key1: number
//       key2: boolean
//   }
//
//   class B implements TObj {
//       key: string
//       key1: number
//   }
//
//
// /**
//  * ques1 如何将两个interface合成一个type
//  * */
//
//
//
//
//
//
//
