
interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

interface Expected3 {
  readonly title: string
}

type DeepReadonly<T> = T extends Record<string, unknown> ? {readonly [k in keyof T]: DeepReadonly<T[k]>} : T
type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
    }
  }
}

type a = {}
type test1 = DeepReadonly<X>

type A = () => 22
type B = A extends Record<string, unknown> ? string : number; // type B = number
type C = A extends Record<string, Object> ? string : number; // type C = string
type aaa = keyof A // aaa = never

const aa: A = () => 22
console.log(typeof aa) // function
// @ts-ignore
// type a = { b: () => 22 }
// type a = { b: number }
// type b<T> = T extends Record<string, unknown> ? string : T
// const c: b< () => 22 > = '2'

// const temp: test1 = {}
// const cc: DeepReadonly<() => 22>

type ann = Record<string, any>
type unk = Record<string, unknown>
type dfs = keyof unknown
type tt = {} extends ann ? string : number
type ttt = {} extends unk ? string : number
const test3: tt = '2'
let test4: unk = () => 22
test4 = test3
