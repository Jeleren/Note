/**
 * 排除（忽略）类型中的某些属性，形成一个新的类型
 * */
/**
 * source code
 * type Omit<K, T extends keyof any> = Pick<K, Exclude<keyof K, T>>
 * */
