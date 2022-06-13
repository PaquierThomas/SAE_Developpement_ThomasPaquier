import { createRouter, createWebHistory } from 'vue-router'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Accueil', name: 'AccueilView', component: AccueilVIew,
      path: '/Programmation', name: 'programmationView', component: ProgrammationView,
      path: '/Artistes', name: 'artistesView', component: ArtistesView,
      path: '/Concert', name: 'concertView', component: ConcertView,
      path: '/Contact', name: 'contactView', component: ContactView,
      path: '/Festival', name: 'festivalView', component: FestivalView,
      path: '/Artiste', name: 'artisteView', component: ArtisteView,
      path: '/MentionsLegales', name: 'mentionlegalesView', component: MentionsLegalesView

    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
