export type PositiveInteger = number & { readonly __brand: 'PositiveInteger' }

export function isPositiveInteger(value: number): boolean {
  return Number.isInteger(value) && value >= 0
}

// validates and marks value
export function toPositiveInteger(value: number): PositiveInteger {
  if (!isPositiveInteger(value)) {
    throw new Error(`Entier positif attendu, reçu : ${value}`)
  }
  return value as PositiveInteger
}
