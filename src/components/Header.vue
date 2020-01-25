<template>
	<header id="header" class="header" :class="{'nav-active' : !hamburherActive}">
    	<div class="container">
			<router-link to='/' tag='a' class="navbar-brand">
				<img :src="(`/images/${logoName}`)" alt="#">
				<span>Gratia</span>
			</router-link>
      		<nav id="nav">
				<ul class="nav-list">
					<router-link v-for="(item,key) in navigation" :key='key' tag='li' :to=item.path><a>{{item.name}}</a></router-link>
				</ul>
      		</nav>
			<a class="hamburger hamburger--collapse hamburger--squeeze" href="#" @click="hamburherActive = !hamburherActive">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
			</a>
    	</div>
  	</header>
</template>

<script>
export default {
  	data() {
		return {
			hamburherActive: true,
			logoName: 'logo-01.png',
			navigation: [
				{
					path: '/about',
			  		name: 'About'
				},
				{
					path: '/menu',
			  		name: 'Menu'
				},
				{
					path: '/gallery',
			  		name: 'Gallery'
				},
				{
					path: '/contact',
			  		name: 'Contact'
				}
			]
		}
	  },
	  watch:{
			$route (to, from){
				this.hamburherActive = true;
			}
		} 
}
</script>

<style scoped lang="scss">
	@import "@/assets/scss/style.scss";
	  
	.header {
		padding: 30px 0;
		position: relative;
		z-index: 2;

		@include media('>=desktop') {
			padding: 63px 0 35px;
		}

		&.header-home {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;
		}

		&.nav-active {
			#nav {
				transform: translateX(0);
			}
		}

		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	#nav {
		@include media("<desktop") {
			@include animate(transform);

			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			min-height: 100vh;
			background-color: $dark-blue;
			display: flex;
			align-items: center;
			padding: 70px 30px;
			transform: translateX(100%);
		}
	}

	.navbar-brand {
		font-family: $base-font-serif;
		font-weight: $bold;
		font-size: 24px;
		display: flex;
		align-items: center;
		color: $dark-blue;

		span {
			line-height: 1;
			margin-left: 16px;
		}
		
		.header-home &{
			color: $white;
		}
	}

	.nav-list {
		list-style-type:none;
		font-family: $base-font-serif;
		margin: 0;
		padding: 0;
		font-size: 16px;
		color: $primary;
		width: 100%;
		text-align: center;

		@include media(">=desktop") {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			color: $dark-blue;
		}

		.header-home &{
			@include media(">=desktop") {
				color: $white;
			}
		}

		li {
			&.router-link-active {
				color: $blue;
				
				@include media(">=desktop") {
					color: $primary;
				}
			}

			&:not(:last-child) {
				margin-bottom: 10px;

				@include media(">=desktop") {
					margin-bottom: 0;
				}
			}

			&:not(:first-child) {
				@include media(">=desktop") {
					margin-left: 76px;
				}
			}
		}

		a {
			color: inherit;
			@include animate(color);

			&:hover {
				color: $primary;
			}
		}
	}
</style>
