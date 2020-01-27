<template>
  	<section class="section-contact">
		<div class="container">
			<CaptionSection v-bind=captionSectionObj></CaptionSection>
            <FormContact></FormContact>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import FormContact from '@/components/FormContact'

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
        CaptionSection,
        FormContact
	}
}

</script>