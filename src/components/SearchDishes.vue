<template>
    <div class="search-dish">
        <div class="form-group">
            <input type="text" placeholder="Input dishes name" v-model="inputName">
            <div v-if="inputName">
                <div class="search-drop" :class="{error: showDish.length == 0}">
                    <div v-if="showDish.length != 0">
                        <ul class="drop-list">
                            <li class="drop-list-item" v-for="(product, key) in showDish" :key="key" @click="chooseProduct()" :id="'product-search-'+product.id">
                                <span class="image-holder" :style="{ backgroundImage: 'url(/images/' + product.image + ')' }"></span>
                                <strong class="name">{{product.caption}}</strong>
                                <router-link :to="'dish/'+product.categoryName+'/'+product.id" tag='a' class="link"></router-link>
                            </li>
                        </ul>
                    </div>
                    <div v-else>
                        <p>{{errorMsg}}</p>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            inputName: '',
            getFilterProductByName: [],
            errorMsg: 'Not found'
        }
    },
    computed: {
        ...mapGetters(['getAllProducts']),

        showDish() {
            return this.inputName ? this.getAllProducts.filter((item) => item.caption.toLowerCase().match(this.inputName.toLowerCase())) : '';
        }
    }
}

</script>

<style lang="scss">
    @import "@/assets/scss/style.scss";

    .search-dish {
        padding: 15px 0;
        margin-bottom: 20px;
    }

    .form-group {
        position: relative;

        input {
            width: 100%;
            padding: 10px;
            font-size: 16px;

            @include media(">=desktop") {
                padding: 10px;
                font-size: 18px;
                height: 50px;
            }
        }
    }

    .search-drop {
        position: absolute;
        top: calc(100% + 20px);
        left: 0;
        right: 0;
        background: #fff;
        z-index: 5;
        height: 310px;
        overflow-y: auto;
        border-radius: 4px;
        box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.75);

        &.error {
            height: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;

            @include media(">=desktop") {
                font-size: 24px;
            }
        }

        p {
            margin-bottom: 0;
        }
    }

    .drop-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    .drop-list-item {
        @include animate(background-color color);

        position: relative;
        display: flex;
        align-items: center;

        &:hover {
            cursor: pointer;
            color: $primary;
            background-color: $gray-100;
        }

        &:not(:last-child) {
            margin-bottom: 10px;
        }

        .image-holder {
            background-size: cover;
            background-position: center;
            max-width: 100px;
            width: 100%;
            padding-top: 70px;
            margin-right: 20px;
            

            @include media(">=tablet") {

            }

            @include media(">=desktop") {
                padding-top: 6%;
            }
        }

        .link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
    
</style>