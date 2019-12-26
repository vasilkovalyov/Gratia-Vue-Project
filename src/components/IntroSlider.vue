<template>
	<div class="intro-slider">
        <swiper :options="swiperOptions">
            <swiper-slide v-for="(item,i) in imagesArray" :key=i>
                <div class="slide-item" >
                    <div class='image-holder'>
                        <img :src="('images/')+item" alt="img slide">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <ul class="swiper-pagination"  slot="pagination"></ul>
        <div class="arrow-swiper arrow-swiper-prev" slot="button-prev"></div>
        <div class="arrow-swiper arrow-swiper-next" slot="button-next"></div>
    </div>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'

    export default {
        props: ['imagesArray'],
        data() {
            return {
                swiperOptions: {
                    init: true,
                    uniqueNavElements: true,
                    slidesPerView: 1,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                        renderBullet(index, className) {
                            return `<li class="${className} swiper-pagination-bullet-custom">0${index + 1}</li>`
                        }
                    },
                    navigation: {
                        nextEl: '.arrow-swiper-next',
                        prevEl: '.arrow-swiper-prev',
                    },
                }
            }
        },

        components: {
            swiper,
            swiperSlide
        },
    }

</script>
<style lang="scss" >
@import "../assets/scss/style.scss";

.arrow-swiper {
    color: transparent;
    background: transparent;
    border: 0;
    border-top: 1px solid $white;
    outline: none;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;

    &:hover {
        cursor: pointer;
    }

    &.arrow-swiper-prev {
        border-left: 1px solid $white;
        transform: translateY(-50%) rotate(-45deg);
        left: 0;
    }

    &.arrow-swiper-next {
        border-left: 1px solid $white;
        transform: translateY(-50%) rotate(135deg);
        right: 0;
    }
}

.intro-slider {
    padding: 0 100px;
    position: relative;

    @include media(">=widescreen") {
        max-width: 900px;
        width: 100%;
        margin: 0 auto;
    }
    
    @include media(">=1440px") {
        max-width: 100%;
    }
}

.swiper-slide {
    .image-holder {
        text-align: center;
    }
}

.swiper-pagination {
    position: absolute;
    left: -65px;
    bottom: -70px;
    color: $white;
    font-family: $base-font-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: $bold;
    margin: 0;
    padding: 0;
    list-style-type: none;

    @include media(">=widescreen") {
        bottom: 0;
    }

    @include media(">=1440px") {
        bottom: -70px;
    }
    
    li {
        position: relative;

        &:after {
            content: '';
            position: absolute;
            left: -3px;
            bottom: -11px;
            width: 0;
            height: 2px;
            background-color: $primary;
            @include animate(width);
        }

        &:hover {
            cursor: pointer;
        }

        &:not(:last-child) {
            @include media(">=widescreen") {
                margin-bottom: 20px;
            }

            @include media(">=1440px") {
                margin-bottom: 50px;
            }
        }

        &.swiper-pagination-bullet-active {
            color: $primary;

            &:after {
                width: 65px;
            }
        }
    }
}

.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}

.swiper-wrapper {
    position: relative;
    width: 1000%;   
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
}
</style>
