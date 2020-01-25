<template>
	<section class="details-section" :style="{ backgroundImage: 'url(./images/' + bgImage + ')' }">
        <div class="container">
            <div class="section-content">
                <div class="holder">
                    <h2>{{ sectionCaption }}</h2>
                    <div class="text">
                        <p>{{ text }}</p>
                    </div>
                    <div class="btn-wrap">
                        <a href="#" class="btn">{{ btnName }}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

    export default {
        data() {
            return {
                bgImage: 'img-05.jpg',
                sectionCaption: 'Details',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                btnName: 'PREPARATION OF OUR DISHES'
            }
        }
    }

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";


    $gap-border-mobile: 20px;
    $gap-border-desktop: 40px;

    .details-section {
        
        padding: 20px 0;

        @include media(">=tablet") {
            padding: 40px 0;
        }

        @include media(">=desktop") {
            padding: 133px 0;
            min-height: 700px;
        }

        h2 {
            color: $dark-blue;
            text-transform: uppercase;
            margin-bottom: 15px;

            @include media(">=tablet") {
                font-size: 36px;
            }

            @include media(">=desktop") {
                font-size: 48px;
                margin-bottom: 31px;
            }
        }

        .text {
            @include media(">=desktop") {
                margin-bottom: 45px;
            }
        }

        p {
            font-size: 18px;

            @include media(">=desktop") {
                font-size: 24px;
            }
        }
    }

    .section-content {
        position: relative;
        background-color: $white;
        max-width: 740px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: $gap-border-mobile;

        @include media(">=desktop") {
            padding: $gap-border-desktop;
        }

        .holder {
            
            position: relative;
            z-index: 1;
            padding: 15px 0;

            @include media(">=tablet") {
                padding: 30px 0;
            }

            @include media(">=desktop") {
                padding: 48px 0 61px 0;
            }
        }

        &:after {
            content: '';
            border: 1px solid $gray-100;
            position: absolute;
            top: $gap-border-mobile;
            left: $gap-border-mobile;
            right: $gap-border-mobile;
            bottom: $gap-border-mobile;
            z-index: 0;

            @include media(">=desktop") {
                top: $gap-border-desktop;
                left: $gap-border-desktop;
                right: $gap-border-desktop;
                bottom: $gap-border-desktop;
            }
        }
    }
    
</style>
