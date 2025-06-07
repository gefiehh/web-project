import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FAQView from '../views/FAQView.vue'
import PortfolioView from '../views/PortfolioView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/faq', name: 'FAQ', component: FAQView },
  { path: '/portfolio', name: 'Portfolio', component: PortfolioView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
