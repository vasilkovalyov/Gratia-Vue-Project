<template>
  	<section class="section-gallery">
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
                'captionSection': 'Gallery',
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