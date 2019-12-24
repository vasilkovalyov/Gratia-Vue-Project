<template>
  	<section class="section-about">
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
                'captionSection': 'About',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        }
    },

    components: {
        CaptionSection
	},
	
	mounted() {
        console.log(this.$router.currentRoute);
        document.body.classList.remove('home-page');
	}
  
}

</script>