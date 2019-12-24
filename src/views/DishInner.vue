<template>
	<section class="dish-inner">
		<div class="container">
			<CaptionSection v-bind=captionSectionObj></CaptionSection>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'

export default {
    data() {
        return {
            captionSectionObj: {
                'captionSection': 'Dish Inner Page',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        }
    },

    components: {
        CaptionSection
    },

    mounted() {
        document.body.classList.remove('home-page');
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    
</style>