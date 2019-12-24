<template>
	<section class="dish-inner">
		<div class="container">
            <div class="caption-holder">
			    <h1>{{getSelectedCategoryName}}</h1>
            </div>
            <ul>
                <li v-for="(item,i) in getSelectedCategoryProducts" :key='i'>
                    {{item}}
                </li> 
            </ul>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'

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
        CaptionSection
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

    .dish-inner {
        .caption-holder {
            text-align: center;
        }

        h1 {
            color: $dark-blue;
            text-transform: capitalize;
        }
    }
</style>