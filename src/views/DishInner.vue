<template>
	<section class="dish-inner">
		<div class="container">
            <button class="btn-back" @click="goBackToCategories">&#8592; Back to categories</button>
			<div class="caption-holder">
                 <h1>{{getCategoryName}}</h1>
            </div>
            <div class="dish-product">
                <div class="image-holder" :style="{ backgroundImage: 'url(/images/' + getChooseProduct.image + ')' }"></div>
                <div class="product-body">
                    <div class="caption-holder">
                        <h2>{{getChooseProduct.caption}}</h2>
                        <p>{{getChooseProduct.description}}</p>
                    </div>
                    <span class="cost">{{getChooseProduct.cost}} $</span>
                    <p>Total cost</p>
                </div>
            </div>
		</div>
	</section>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    created() {
        const routeObject = this.$route.params
        this.chooseProductCategoryById({category: routeObject.categoryName, id: routeObject.id});
    },

    methods: {
        ...mapActions(["chooseProductCategoryById"]),
        goBackToCategories() {
            this.$router.push({path: `/category-menu/${this.getChooseProduct.categoryName}`})
        }
        
    },

    computed: {
        ...mapGetters(["getChooseProduct"]),
        getCategoryName() {
            return this.getChooseProduct.categoryName.split('-').join(' ');
        }
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .dish-inner {
        padding: 40px 0;

        .container {
            > .caption-holder {
                text-align: center;
                margin-bottom: 20px;
                
                @include media(">=tablet") {
                    margin-bottom: 60px;
                }
            }
        }

        .caption-holder {
            text-transform: capitalize;
        }

        h1,
        h2 {
            color: $dark-blue;
        }
    }

    .dish-product {
        box-shadow: 0px 0px 29px 1px rgba(243,244,246,1);
        background: $white;
        min-height: 500px;

        @include media(">=desktop") {
            display: flex;
        }

        .image-holder {
            background-position: center;
            background-size: cover;
            padding-top: 70%;
            margin-bottom: 20px;

            @include media(">=tablet") {
                width: 50%;
                margin-bottom: 0;
                padding-top: 0;
            }
        }

        .product-body {
            @include media(">=tablet") {
                width: 50%;
                padding: 40px;
                display: flex;
                flex-direction: column;
            }
        }

        .caption-holder {
            flex-grow: 1;
        }

        h2 {
            color: $dark-blue;

            @include media(">=desktop") {
                font-size: 36px;
            }

            @include media(">=1440px") {
                font-size: 48px;
            }
        }

        .cost {
            font-size: 72px;
            color: $green;
            font-weight: $bold;
            text-align: center;

            ~ p {
                text-align: center;
            }
        }
    }

</style>