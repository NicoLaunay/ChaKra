<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '../components/action/Button.vue'
import Separator from '../components/display/Separator.vue'
import CharacterLine from '../components/display/CharacterLine.vue'
import ToggleButton from '../components/action/ToggleButton.vue'
import { LineCharacterBuilder, type LineCharacter } from '../components/display/line-character.ts'
import { usePlayerCharactersStore } from '@/ui'
import { computed, ref, type Ref } from 'vue'
import { storeToRefs } from 'pinia'

// STORE
const store = usePlayerCharactersStore()
const { lineCharacters } = storeToRefs(store) // values
const { initiate } = store // functions
initiate()

const router = useRouter()

const userName = 'Nico'
const myCharacters: Ref<LineCharacter[]> = computed(() =>
  lineCharacters.value.filter((character) => character.player == userName),
)
const otherCharacters: Ref<LineCharacter[]> = computed(() =>
  lineCharacters.value.filter((character) => character.player != userName),
)

const displayMyCharacters = ref(true)
const displayOtherCharacters = ref(true)

function goTo(route: string) {
  router.push(route)
}
</script>

<template>
  <div class="flex flex-col gap-5">
    <div class="text-primary text-3xl">{{ userName }}</div>

    <Separator />

    <div class="flex gap-2">
      <ToggleButton v-model="displayMyCharacters">Mes PJ</ToggleButton>
      <ToggleButton v-model="displayOtherCharacters">PJ Tiers</ToggleButton>
    </div>

    <Separator color="tertiary" />

    <!-- USER CHARACTERS -->
    <div v-show="displayMyCharacters" id="my-characters" class="flex flex-col gap-3">
      <div class="flex justify-between">
        <h3 class="text-primary uppercase">Mes Personnages</h3>
        <Button variant="tertiary" @click="goTo('/creation')">+ Personnage</Button>
      </div>
      <div v-for="character in myCharacters">
        <CharacterLine v-bind:character="character" />
      </div>
    </div>

    <!-- OTHER CHARACTERS -->
    <div v-show="displayOtherCharacters" id="other-characters" class="flex flex-col gap-3">
      <div class="flex justify-between">
        <h3 class="text-primary uppercase">Personnages Tiers</h3>
        <Button variant="tertiary">-> Importer</Button>
      </div>
      <div v-for="character in otherCharacters">
        <CharacterLine v-bind:character="character" />
      </div>
    </div>
  </div>

  <div id="testing" class="hidden">
    <div>
      <h2>Button</h2>
      <Button variant="primary">Primaire</Button>
      <Button variant="secondary">Secondaire</Button>
      <Button variant="tertiary">Tertiaire</Button>
      <Button variant="primary" @click="goTo('/creation')">Nouveau PJ</Button>
    </div>
    <div>
      <h2>ToggleButton</h2>
      <ToggleButton>Option 1</ToggleButton>
      <ToggleButton>Option 2</ToggleButton>
      <ToggleButton>Option 3</ToggleButton>
    </div>
  </div>
</template>
