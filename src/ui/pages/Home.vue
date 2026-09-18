<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '../components/action/Button.vue'
import Separator from '../components/Separator.vue'
import CharacterLine from '../components/CharacterLine.vue'
import ToggleButton from '../components/action/ToggleButton.vue'
import { LineCharacterBuilder, type LineCharacter } from '../components/line-character.ts'
import { ref } from 'vue'

const builder = new LineCharacterBuilder()

const router = useRouter()

const userName = 'Nom Utilisateur'
const myCharacters: LineCharacter[] = [builder.build(), builder.build(), builder.build()]
const otherCharacters: LineCharacter[] = [builder.build(), builder.build(), builder.build()]

function goTo(route: string) {
  router.push(route)
}

const displayMyCharacters = ref(true)
const displayOtherCharacters = ref(true)
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
