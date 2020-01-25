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
        padding-top: 80px;
        
        @include media(">=tablet") {
            min-height: 100vh;
        }

        @include media(">=desktop") {
            padding-top: 140px;
        }
    }
    
</style>
