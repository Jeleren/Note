/**
 * Record 将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型
 */
/**
 * source code
 * Construct a type with a set of properties K of type T
 * type Record<K extends keyof any, T> = {
 *   [P in K]: T; // set all properties of K to type of T
 * }
 * */
type petsGroup = 'dog' | 'cat' | 'fish' // 联合类型
interface PetInfo {
  name: string,
  age: number
}

type pets = Record<petsGroup, PetInfo>

const animalInfo: pets = {
  dog: {
    name: 'dogName',
    age: 2
  },
  cat: {
    name: 'catName',
    age: 3
  },
  fish: {
    name: 'fishName',
    age: 4
  }
}

const p: petsGroup = 'cat'
console.log(p)

type test = Record<string, any>
const a: test = {
  1: animalInfo
}
console.log(a)
