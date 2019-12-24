<template>
	<section class="section-dishes">
		<div class="container">
            <div class="caption-holder">
			    <h1>{{getSelectedCategoryName}}</h1>
            </div>
            <div class="dishes-list">
                <div class="row">
                    <div class="col" v-for="(card,key) in getSelectedCategoryProducts" :key="key">
                        <CardCategory :card="card"></CardCategory>
                    </div>
                </div>
            </div>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import CardCategory from '@/components/Menu/CardCategory'

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
        document.body.classList.remove('home-page');
        this.chooseCategory(this.$route.params.category);
    },

    components: {
        CaptionSection,
        CardCategory
    },

    methods: {
        ...mapActions(["chooseCategory"])
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
        }

        h1 {
            color: $dark-blue;
            text-transform: capitalize;
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