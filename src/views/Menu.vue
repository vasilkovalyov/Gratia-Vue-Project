<template>
	<section class="section-menu">
		<div class="container">
			<CaptionSection v-bind=captionSectionObj></CaptionSection>
            <CategoryList></CategoryList>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import CategoryList from '@/components/Menu/CategoryList'

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
        CategoryList
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