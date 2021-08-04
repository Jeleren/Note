/**
 * 取前一个类型中的属性，且该属性不存在于后一个类型之中，并形成一个新的类型
 * */
/**
 * source code
 * type Exclude<T, K> = T extends K ? never: T
 * */

type exclude<T, K> = T extends K ? never: T

type a = exclude<'a' | 'b', 'b'>
