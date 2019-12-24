<template>
	<div class="menu-card-category-list">
        <div class="row">
            <div class="col" v-for="(card, key) in menuCategoryArray" :key="key">
                <MenuCardCategory :objProps="card"></MenuCardCategory>
            </div>
        </div>
    </div>
</template>
<script>

import MenuCardCategory from './MenuCardCategory'

export default {
    data() {
        return {
            menuCategoryArray: [
                {
                    image: 'img-06.jpg',
                    link: 'MAIN DISHES',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    image: 'img-07.jpg',
                    link: 'SOUPS',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    image: 'img-08.jpg',
                    link: 'HAMBURGERS',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                
                {
                    image: 'img-09.jpg',
                    link: 'DESSERTS',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    image: 'img-10.jpg',
                    link: 'BARBECUE',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    image: 'img-11.jpg',
                    link: 'SALADS',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ]
        }
    },

    components: {
        MenuCardCategory
    },
  
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .menu-card-category-list {
        .row {
            @include media(">=phone") {
                display: flex;
                flex-wrap: wrap;
                margin: 0 -10px;
            }

            @include media(">=1440px") {
                margin: 0 -30px;
            }
        }

        .col {
            @include media(">=phone") {
                display: flex;
                width: 50%;
                padding: 0 10px;
            }

            @include media(">=tablet") {
                width: 33.33%;
            }

            @include media(">=1440px") {
                width: 33.33%;
                padding: 0 30px;
            }
        }
    }
    
</style>