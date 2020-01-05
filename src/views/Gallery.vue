<template>
  	<section class="section-gallery">
		<div class="container">
			<CaptionSection v-bind="captionSectionObj"></CaptionSection>
            <GalleryImages :arrayImages="getSlicedArray(currentPage)"></GalleryImages>
            <Pagination 
                :countProductOnPage="countProductOnPage" 
                :productLength="getGalleryImages.length"
                :products="getGalleryImages"
                @getCurrentPage="getCurrentPage"
            ></Pagination>
		</div>
	</section>
</template>
<script>

import CaptionSection from '@/components/CaptionSection'
import GalleryImages from '@/components/GalleryImages'
import Pagination from '@/components/Pagination'

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            captionSectionObj: {
                'captionSection': 'Gallery',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            currentPage: 1,
            countProductOnPage: 12,
        }
    },

    components: {
        CaptionSection,
        GalleryImages,
        Pagination
    },

    methods: {
        getSlicedArray(currentPage) {
            let startIndex = (this.countProductOnPage * (currentPage - 1)) + --currentPage;
            let endIndex = (this.countProductOnPage * (currentPage + 1)) + currentPage++;

            return this.getGalleryImages.slice(startIndex, endIndex);
        },

        getCurrentPage(data) {
            this.currentPage = data;
        }
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