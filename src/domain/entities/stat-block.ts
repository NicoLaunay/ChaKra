/**
 * Sert aussi bien pour les stats de base d'une créature
 * que pour un jeu de modificateurs (bonus de race, d'équipement...).
 */
export interface StatBlock {
  readonly strength: number;
  readonly dexterity: number;
  readonly constitution: number;
  readonly intelligence: number;
  readonly wisdom: number;
  readonly charisma: number;
}

export function addStats(a: StatBlock, b: StatBlock): StatBlock {
  return {
    strength: a.strength + b.strength,
    dexterity: a.dexterity + b.dexterity,
    constitution: a.constitution + b.constitution,
    intelligence: a.intelligence + b.intelligence,
    wisdom: a.wisdom + b.wisdom,
    charisma: a.charisma + b.charisma,
  };
}

// stats effectives = base + race + équipement (à la volée, dans un `computed` côté Vue)
