import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		name: 'home',
		component: () => import('../views/Home.vue')
  	},
  	{
		path: '/about',
		name: 'about',
    	component: () => import('../views/About.vue')
  	},
  	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/Contact.vue')
  	},
  	{
		path: '/gallery', component: () => import('../views/Gallery.vue')
  	},
  	{
		path: '/menu',
		name: 'menu',
		component: () => import('../views/Menu.vue')
  	},
  	{
		path: '/category-menu/:category/',
		name: 'category-menu',
		component: () => import('../views/DishesList.vue'),
	},
	{
		path: '*',
		name: 'not found',
		component: () => import('../views/NotFound.vue')
	},
]


const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
  	routes
})

export default router
