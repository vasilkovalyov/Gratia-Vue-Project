<template>
	<div class="menu-card-category-list">
        <div class="row">
            <div class="col" v-for="(card,key) in menuCategoryArray" :key="key">
                <CardCategory :objProps="card"></CardCategory>
            </div>
        </div>
    </div>
</template>
<script>

import CardCategory from './CardCategory'

export default {
    data() {
        return {
            menuCategoryArray: [
                {
                    id: 1,
                    image: 'img-06.jpg',
                    caption: 'MAIN DISHES',
                    categoryName: 'main-dishes',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    id: 2,
                    image: 'img-07.jpg',
                    caption: 'SOUPS',
                    categoryName: 'soups',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    id: 3,
                    image: 'img-08.jpg',
                    caption: 'HAMBURGERS',
                    categoryName: 'hamburgers',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                
                {
                    id: 4,
                    image: 'img-09.jpg',
                    caption: 'DESSERTS',
                    categoryName: 'desserts',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    id: 5,
                    image: 'img-10.jpg',
                    caption: 'BARBECUE',
                    categoryName: 'barbecue',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                {
                    id: 6,
                    image: 'img-11.jpg',
                    caption: 'SALADS',
                    categoryName: 'salads',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                }
            ]
        }
    },

    components: {
        CardCategory
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