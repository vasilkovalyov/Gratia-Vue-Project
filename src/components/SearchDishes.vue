<template>
    <div class="search-dish">
        <div class="form-group">
            <input type="text" placeholder="Input dishes name" v-model="inputName">
            <div class="search-drop">
                <ul class="drop-list">
                    <li class="drop-list-item" v-for="(product, key) in showDish" :key="key">
                        <span class="image-holder" :style="{ backgroundImage: 'url(/images/' + product.image + ')' }"></span>
                        <strong class="name">{{product.caption}}</strong>
                    </li>
                </ul>
            </div>
        </div>
        <!-- {{this.$store.getters.getAllProducts}} -->
        {{showDish}}

    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            inputName: '',
            getFilterProductByName: []
        }
    },
    computed: {
        ...mapGetters(['getAllProducts']),

        showDish() {
            return this.inputName ? this.getAllProducts.filter((item) => item.caption.toLowerCase().match(this.inputName)) : '';
        }
    },

    watch: {
        getFilterProductByName() {
            
        },
    },

    methods: {
      
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
        input {
            width: 100%;
            height: 50px;
            padding: 10px;
            font-size: 18px;
        }
    }

    .drop-list {
        list-style-type: none;
        padding: 0;
        margin: 0;

        
    }

    .drop-list-item {
        display: flex;
        align-items: center;

        .image-holder {
            background-size: cover;
            background-position: center;
             max-width: 200px;
            width: 100%;
            padding-top: 60%;
        }
    }
    
</style>