<template>
  <section class="perfection-section">
      <div class="container">
        <CaptionSection v-bind="captionSectionObj"></CaptionSection>
      </div>
  </section>
</template>

<script>

import CaptionSection from '@/components/CaptionSection'

export default {
    data() {
        return {
            captionSectionObj: {
                'captionSection': 'PERFECTION',
                'subcaptionText': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        }
    },

    components: {
        CaptionSection
    }
  
}

</script>

<style lang="scss">
    @import "@/assets/scss/style.scss";

    .perfection-section {
        .caption-section {

        }
    }
    
</style>
