<template>
	<div class="intro-slider">
        <slick ref="slick" :options="slickOptions">
            <div class="slide-item" v-for="(item,i) in imagesArray" :key=i>
                <div class='image-holder'>
                    <img :src="('images/')+item" alt="img slide" >
                </div>
            </div>
        </slick>
    </div>
</template>
<script>
    import Slick from 'vue-slick';
    import jQuery from "jquery";

    export default {
        props: ['imagesArray'],
        data() {
            return {
                slickOptions: {
                    slidesToShow: 1,
                    infinite: true,
                    accessibility: true,
                    adaptiveHeight: true,
                    dots: true,
                    draggable: true,
                    edgeFriction: 0.30,
                    swipe: true,
                    prevArrow: this.navigationPrev,
                    nextArrow: this.navigationNext,
                }
            }
        },
        components: { Slick },
        methods: {
            next() {
                this.$refs.slick.next();
                
            },
            prev() {
                this.$refs.slick.prev()
            },
            reInit() {
                this.$refs.slick.reSlick()
            }
        }
    }
</script>
<style lang="scss" >
@import "../assets/scss/style.scss";

.slick-arrow {
    color: transparent;
    background: transparent;
    border: 0;
    border-top: 1px solid #1f2736;
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

    &.slick-prev {
        border-left: 1px solid #1f2736;
        transform: translateY(-50%) rotate(-45deg);
        left: 0;
    }

    &.slick-next {
        border-left: 1px solid #1f2736;
        transform: translateY(-50%) rotate(135deg);
        right: 0;
    }
}

.intro-slider {
    padding: 0 100px;
}

.slide-item {
    .image-holder {
        text-align: center;
    }
}

.slick-dots {
    position: absolute;
    left: -65px;
    bottom: 100px;
    color: $white;
    font-family: $base-font-serif;
    font-style: normal;
    font-size: 16px;
    font-weight: $bold;
    margin: 0;
    padding: 0;
    
    li {
        position: relative;
        list-style-type: decimal-leading-zero;

        &:after {
            content: '';
            position: absolute;
            left: -30px;
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
            margin-bottom: 50px;
        }

        &.slick-active {
            color: $primary;

            &:after {
                width: 65px;
            }
        }
    }

    button {
        display: none;
    }
}
    
</style>
