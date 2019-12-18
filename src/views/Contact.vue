<template>
  	<div class="gallery-page">
		<div class="container">
			<CaptionSection v-bind=captionSectionObj></CaptionSection>
		</div>
	</div>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'

export default {
    data() {
        return {
            captionSectionObj: {
                'captionSection': 'Contact',
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