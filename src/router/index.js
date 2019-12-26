import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Gallery from '../views/Gallery.vue';
import Menu from '../views/Menu.vue';
import DishesList from '../views/DishesList.vue';
import DishInner from '../views/DishInner.vue';
import NotFound from '../views/NotFound.vue';

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{ path: '', name: 'home' ,component: Home },
		{ path: '/about', name: 'about' ,component: About },
		{ path: '/contact', name: 'contact' ,component: Contact },
		{ path: '/gallery', name: 'gallery' ,component: Gallery },
		{ path: '/menu', name: 'menu' ,component: Menu },
		{ path: '/category-menu/:category/', name: 'category-menu' ,component: DishesList },
		{ path: '/dish/:categoryName/:id', name: 'dish' ,component: DishInner },
		{ path: '*', name: 'not-found' ,component: NotFound },
	]
})

export default router
