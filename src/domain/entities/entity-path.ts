import type { Path } from './path'

// NOTE : le champ Kotlin `idCharacter` a été retiré. C'est une clé étrangère,
// elle appartient à la couche de persistance, pas au domaine : l'entité contient
// déjà sa liste de EntityPath, le lien est donc implicite.
export interface EntityPath {
  readonly path: Path
  readonly levelReached: number
}
