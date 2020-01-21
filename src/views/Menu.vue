<template>
	<section class="section-menu">
		<div class="container">
			<CaptionSection v-bind=captionSectionObj></CaptionSection>
            <SearchDishes></SearchDishes>
            <div class="menu-card-category-list">
                <div class="row">
                    <div class="col" v-for="(card,key) in getCategoryList" :key="key">
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
import SearchDishes from '@/components/SearchDishes'

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            captionSectionObj: {
                'captionSection': 'Menu',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        }
    },

    components: {
        CaptionSection,
        CardCategory,
        SearchDishes
    },

    computed: {
        ...mapGetters(['getCategoryList'])
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .menu-page {
        .caption-section {
            margin-bottom: 0;
            padding-bottom: 20px;

            p {
                margin-bottom: 0;
            }
        }
    }
  
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