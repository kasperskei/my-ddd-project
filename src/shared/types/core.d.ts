declare global {
  interface SubmitEvent extends Event {
    readonly submitter: HTMLElement
  }

  // Вроде есть внутри lib.dom.d.ts
  // interface HTMLFormElement {
  //   onsubmit: (this: GlobalEventHandlers, ev: SubmitEvent) => unknown | null
  // }
}

declare interface Array<T> {
  uniqueBy: (resolver?: (item: T) => unknown | keyof T) => T[]
}

declare interface NumberConstructor {
  range: (from: number, to: number) => number[]
}
