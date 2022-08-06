export const isReadableNumber = (number: number): number is number => !Number.isNaN(number) && Number.isFinite(number)
