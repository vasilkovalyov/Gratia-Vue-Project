<template>
    <div class="pagination-holder">
        <v-pagination v-model="currentPage" 
            :page-count="getPagesByCountProduct(productLength)" 
            :classes="bootstrapPaginationClasses" 
            :labels="paginationAnchorTexts">
        </v-pagination>
    </div>
</template>
<script>

import vPagination from 'vue-plain-pagination'

export default {
    props: ['countProductOnPage', 'productLength'],
    data() {
        return {
            currentPage: 1,
            bootstrapPaginationClasses: {
                ul: 'pagination',
                li: 'page-item',
                liActive: 'active',
                liDisable: 'disabled',
                button: 'page-link'  
            },
            paginationAnchorTexts: {
                first: '<<',
                prev: '<',
                next: '>',
                last: '>>'
            }
        }
    },

    watch: {
        currentPage() {
            return this.$emit("getCurrentPage",this.currentPage)
        }
    },

    methods: {
        getPagesByCountProduct(countProduct) {
            return Math.round(countProduct / this.countProductOnPage);
        }
    },

    components: {
        vPagination
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

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