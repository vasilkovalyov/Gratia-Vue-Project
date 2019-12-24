<template>
	<div class="menu-card-category-list">
        <div class="row">
            <div class="col" v-for="(card,key) in getCategoryList" :key="key">
                <CardCategory :objProps="card"></CardCategory>
            </div>
        </div>
    </div>
</template>
<script>

import CardCategory from './CardCategory'

import { mapGetters } from 'vuex';

export default {
    components: {
        CardCategory
    },

    computed: {
        ...mapGetters(['getCategoryList'])
    }
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