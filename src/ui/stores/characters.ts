import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Player, PlayerCharacter } from '@/domain'
import { PlayerCharacterBuilder } from '@/domain/entities/player-character'
import { toLineCharacter } from '../components/display/line-character'

export const usePlayerCharactersStore = defineStore('characters', () => {
  const characters = ref<PlayerCharacter[]>([]) // état
  const lineCharacters = computed(() =>
    characters.value.map((character) => toLineCharacter(character)),
  )
  const count = computed(() => characters.value.length) // getter (valeur dérivée)

  function add(character: PlayerCharacter) {
    // action (modifie l'état)
    characters.value.push(character)
  }

  function initiate() {
    const me: Player = { name: 'Nico' }
    add(new PlayerCharacterBuilder().withPlayer(me).withName('Léorsha Carcinos').build())
    add(new PlayerCharacterBuilder().withPlayer(me).withName('Léorsha Carcinos').build())
    add(new PlayerCharacterBuilder().withPlayer(me).withName('Léorsha Carcinos').build())
    add(new PlayerCharacterBuilder().build())
    add(new PlayerCharacterBuilder().build())
    add(new PlayerCharacterBuilder().build())
  }

  return { characters, lineCharacters, count, add, initiate } // tout ce qui est exposé
})
