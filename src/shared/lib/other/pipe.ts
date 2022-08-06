/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any */
type PipeFnType = (arg?: any) => any

type ExtractFirstArgType<T extends PipeFnType[]> = T extends [(arg: infer A) => any, ...infer ARGS] ? A : undefined

type ExtractLastReturnType<T extends PipeFnType[]> = T extends [...infer ARGS, () => infer L] ? L : undefined

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export const pipe = <T extends PipeFnType[]>(...args: T): (arg?: ExtractFirstArgType<T>) => ExtractLastReturnType<T> => args.reduce((a, b) => (arg) => b(a(arg)))
