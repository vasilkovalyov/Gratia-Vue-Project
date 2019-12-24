<template>
	<section class="intro-holder-section">
        <div class="container">
            <IntroSlider :imagesArray="imagesArray"></IntroSlider>
        </div>
    </section>
</template>
<script>
    import IntroSlider from '../IntroSlider'

    export default {
        data() {
            return {
                imagesArray: ["img-01.png", "img-01.png", "img-01.png"]
            }
        },
        components: {
            IntroSlider
        }
    }

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .intro-holder-section {
        background-color: $dark-blue;
        min-height: 100vh;
        padding-top: 140px;
    }
    
</style>
