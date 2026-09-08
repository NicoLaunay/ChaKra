// src/domain/errors.ts

/**
 * Base de toutes les erreurs métier.
 * Permet de distinguer "règle COF violée" d'un bug technique.
 */
export abstract class DomainError extends Error {
  constructor(message: string) {
    super(message)
    this.name = new.target.name       // ex. "PoolOverflowError" au lieu de "Error"
    Object.setPrototypeOf(this, new.target.prototype) // rétablit instanceof
  }
}

/** current > max sur un Pool (PV, mana…). */
export class PoolOverflowError extends DomainError {
  constructor(
    readonly current: number,
    readonly max: number,
  ) {
    super(`Le pool dépasse son maximum : ${current} > ${max}.`)
  }
}

/** Une caractéristique sort de l'intervalle autorisé. */
export class InvalidStatValueError extends DomainError {
  constructor(
    readonly stat: string,
    readonly value: number,
  ) {
    super(`Caractéristique ${stat} invalide : ${value}.`)
  }
}
