<template>
  	<section class="section-gallery">
		<div class="container">
			<CaptionSection v-bind="captionSectionObj"></CaptionSection>
            <GalleryImages :arrayImages="getGalleryImages"></GalleryImages>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import GalleryImages from '@/components/GalleryImages'

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            captionSectionObj: {
                'captionSection': 'Gallery',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        }
    },

    created() {
        console.log(this.getGalleryImages);
    },

    components: {
        CaptionSection,
        GalleryImages
    },

    computed: {
        ...mapGetters(["getGalleryImages"])
    }
}

</script>
<style lang="scss">
.gallery-images {
    .row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px;
    }

    .col {
        padding: 0 10px;
        width: 25%;
    }

    .image-holder {
        margin-bottom: 20px;
    }

}
</style>