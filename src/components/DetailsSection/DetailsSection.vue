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

    $gap-border: 40px;

    .details-section {
        min-height: 700px;
        padding: 133px 0;

        h2 {
            color: $dark-blue;
            text-transform: uppercase;
            font-size: 48px;
            margin-bottom: 31px;
        }

        .text {
            margin-bottom: 45px;
        }

        p {
            font-size: 24px;
        }
    }

    .section-content {
        position: relative;
        background-color: $white;
        max-width: 740px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: $gap-border;

        .holder {
            padding: 48px 0 61px 0;
            position: relative;
            z-index: 1;
        }

        &:after {
            content: '';
            border: 1px solid $gray-100;
            position: absolute;
            top: $gap-border;
            left: $gap-border;
            right: $gap-border;
            bottom: $gap-border;
            z-index: 0;
            
        }
    }
    
</style>
