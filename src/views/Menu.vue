<template>
	<section class="section-menu">
		<div class="container">
			<CaptionSection v-bind=captionSectionObj></CaptionSection>
            <MenuCardCategoryList></MenuCardCategoryList>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import MenuCardCategoryList from '@/components/MenuCategory/MenuCardCategoryList'

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
        MenuCardCategoryList
    },

    mounted() {
        document.body.classList.remove('home-page');
    }
  
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .caption-section {
        margin-bottom: 87px;
    }

    
</style>