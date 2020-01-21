<template>
  	<section class="section-about">
		<div class="container">
			<CaptionSection v-bind="captionSectionObj"></CaptionSection>
            <div class="text-about">
                <p>{{textAbout}}</p>
            </div>
            <OurTeam></OurTeam>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import OurTeam from '@/components/OurTeam/OurTeam'

export default {
    data() {
        return {
            captionSectionObj: {
                'captionSection': 'About',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            textAbout: 'These days are all Happy and Free. These days are all share them with me oh baby. Its time to play the music. Its time to light the lights. Its time to meet the Muppet Show tonight.And you know where you were then. Girls were girls and men were men. Mister we could use a man like Herbert Hoover again.'
        }
    },

    components: {
        CaptionSection,
        OurTeam,
    }
}

</script>
<style lang="scss">
    .text-about {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }
</style>