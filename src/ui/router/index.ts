import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CharacterCreation from '../pages/CharacterCreation.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/creation', component: CharacterCreation },
    // { path: '/personnage/:id', component: CharacterSheetView, props: true },
  ],
})

export default router
