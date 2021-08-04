/**
 * 抽取类型中的某些属性形成新的类型
 * */
/**
 * source code
 * type Pick<T, K extends keyof T> = {
 *   [P in K]: T[P]
 * }
 * */
