<template>
  <div id="app" class="wrapper">
	<Header :class="{'header-home': this.$route.path === '/'}"></Header>
	<main class="main" id='main'>
    	<router-view></router-view>
	</main>
	<Footer></Footer>
  </div>
</template>
<script>
	import Header from '@/components/Header.vue'
	import Footer from '@/components/Footer.vue'

	export default {
		components: {
			Header,
			Footer
		}
	}

</script>
<style lang="scss">
	@import './assets/scss/style';


</style>
