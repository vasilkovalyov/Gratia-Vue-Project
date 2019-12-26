<template>
	<section class="section-dishes">
		<div class="container">
            <button class="btn-back" @click="goBackToCategories">&#8592; Back to menu</button>
            <div class="caption-holder">
			    <h1>{{getSelectedCategoryName}}</h1>
            </div>
            <div class="dishes-list">
                <div class="row">
                    <div class="col" v-for="(card,key) in getSelectedCategoryProducts" :key="key">
                        <CardDish :card="card"></CardDish>
                    </div>
                </div>
            </div>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import CardDish from '@/components/Menu/CardDish'

import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            category: this.$router.currentRoute.params.category,
            captionSectionObj: {
                'captionSection': 'Category Inner Page',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        }
    },
    
    mounted() {
        this.chooseCategory(this.$route.params.category);
    },

    components: {
        CaptionSection,
        CardDish
    },

    methods: {
        ...mapActions(["chooseCategory"]),
        goBackToCategories() {
            this.$router.push('/menu');
        }
    },

    computed: {
        ...mapGetters(['getSelectedCategoryProducts', 'getSelectedCategoryName']),
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .section-dishes {
        .caption-holder {
            text-align: center;
            margin-bottom: 40px;

            @include media(">=1440px") {
                margin-bottom: 80px;
            }
        }

        h1 {
            color: $dark-blue;
            text-transform: capitalize;

            @include media(">=1440px") {
                font-size: 48px;
            }
        }
    }

    .dishes-list {
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