<template>
	<section class="section-dishes">
		<div class="container">
            <button class="btn-back" @click="goBackToCategories">&#8592; Back to menu</button>
            <div class="caption-holder">
			    <h1>{{getSelectedCategoryName}}</h1>
            </div>
            <div v-if="isEmpty == 0">
                <div class="empty-category">
                    <h1>{{sorryMsg}}</h1>
                </div>
            </div>
            <div v-else>
                <div class="dishes-list">
                    <div class="row">
                        <div class="col" v-for="(card,key) in getSlicedArray(currentPage)" :key="key">
                            <CardDish :card="card"></CardDish>
                        </div>
                    </div>
                    <div v-if="isEmpty > countProductOnPage">
                        <Pagination 
                            :countProductOnPage="countProductOnPage" 
                            :productLength="getSelectedCategoryProducts.length"
                            :products="getSelectedCategoryProducts"
                            @getCurrentPage="getCurrentPage"
                        ></Pagination>
                    </div>
                </div>
            </div>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import CardDish from '@/components/Menu/CardDish'
import Pagination from '@/components/Pagination'

import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            sorryMsg: 'Sorry, category is empty',
            captionSectionObj: {
                'captionSection': 'Category Inner Page',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            currentPage: 1,
            countProductOnPage: 6,
        }
    },
    
    created() {
        this.chooseCategory(this.$route.params.category);
    },

    components: {
        CaptionSection,
        CardDish,
        Pagination
    },

    methods: {
        ...mapActions(["chooseCategory"]),

        goBackToCategories() {
            this.$router.push('/menu');
        },
      
        getSlicedArray(currentPage) {
            let startIndex = (this.countProductOnPage * (currentPage - 1)) + --currentPage;
            let endIndex = (this.countProductOnPage * (currentPage + 1)) + currentPage++;

            return this.getSelectedCategoryProducts.slice(startIndex, endIndex);
        },

        getCurrentPage(data) {
            this.currentPage = data;
        }
    },

    computed: {
        ...mapGetters(['getSelectedCategoryProducts', 'getSelectedCategoryName']),
        isEmpty() {
            return this.getSelectedCategoryProducts.length;
        }
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

    .empty-category {
        text-align: center;
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

    .pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin: 0;

        .page-item {
            margin: 0 8px;
        }

        .page-link {
            @include animate(background-color color);

            background: $base-text-color;
            border: 0;
            outline: none;
            padding: 5px 10px;
            border-radius: 2px;
            color: $white;

            &:hover {
                cursor: pointer;
                background-color: $primary;
                color: $white;
            }

            &.pagination-link--disable {
                &:hover {
                    cursor: default;
                    background: $base-text-color;
                    color: $white;
                }
            }

            &.pagination-link--active {
                &:hover {
                    cursor: default;
                }
            }
        }

        .pagination-link--active {
            background-color: $primary;
            color: $white;
        }
    }
</style>