type Timestamp = number
type UnixTimestamp = number
type Email = string

type Int = number
type Float = number
type UInt = number
type UFloat = number

type FileExtension = string
type FileName = string
type FileNameWithExtension = `${FileName}.${FileExtension}`
type FilePath = `/${FileName}.${FileExtension}`

/** Значения преобразующиеся в false */
type Falsy = '' | 0 | false | null | undefined

/** Примитивные типы данных в JS */
type Primitive = bigint | boolean | number | string | symbol | null | undefined
// eslint-disable-next-line @typescript-eslint/ban-types
type Builtin = Date | Error | Function | Primitive | RegExp

type JSONValue = JSONArray | JSONObject | boolean | number | string
type JSONObject = Record<string, JSONValue>
type JSONArray = JSONValue[]

type Nullable<T> = T extends null | undefined ? T : never
type NonNullable<T> = T extends null | undefined ? never : T

/** Получить значения объекта */
type ValueOf<T> = T[keyof T]

type UnionToIntersection<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never
type UnionToTuple<T> = UnionToIntersection<T extends never ? never : (t: T) => T> extends (_: never) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : []

type Join<A extends unknown[], S extends string> = A extends [unknown, unknown, ...infer R]
  ? Join<[`${A[0]}${S}${A[1]}`, ...R], S>
  : A[0]

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

// eslint-disable-next-line @typescript-eslint/ban-types
type DeepReadonlyPrimitive = Function | boolean | number | string | null | undefined
type DeepReadonlyArray<T> = readonly DeepReadonly<T>[]
type DeepReadonlyMap<K, V> = ReadonlyMap<DeepReadonly<K>, DeepReadonly<V>>
type DeepReadonlySet<T> = ReadonlySet<DeepReadonly<T>>
type DeepReadonlyObject<T> = {readonly [K in keyof T]: DeepReadonly<T[K]>}

type DeepReadonly<T> =
  T extends DeepReadonlyPrimitive ? T :
    T extends Map<infer K, infer V> ? DeepReadonlyMap<K, V> :
      T extends Set<infer M> ? DeepReadonlySet<M> : DeepReadonlyObject<T>

interface Position2D {
  x: number
  y: number
}
interface Position3D extends Position2D {
  z: number
}
type Position = Position2D | Position3D
