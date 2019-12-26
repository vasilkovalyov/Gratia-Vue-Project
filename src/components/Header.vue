<template>
	<header id="header" class="header">
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
    	</div>
  	</header>
</template>

<script>
export default {
  	data() {
		return {
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
  	}
}
</script>

<style scoped lang="scss">
	@import "@/assets/scss/style.scss";
	  
	.header {
		padding: 63px 0 35px;
		position: static;

		&.header-home {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			z-index: 10;
		}

		.container {
			display: flex;
			align-items: center;
			justify-content: space-between;
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
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-family: $base-font-serif;
		margin: 0;
		font-size: 16px;
		color: $dark-blue;

		.header-home &{
			color: $white;
		}

		li {
			&.router-link-active {
				color: $primary;
			}

			&:not(:first-child) {
				margin-left: 76px;
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
