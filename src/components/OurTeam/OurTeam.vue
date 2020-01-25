<template>
  	<section class="section-our-team">
		<div class="container">
            <div class="caption-section">
                <h2>{{caption}}</h2>
            </div>
            <div class="our-team-list">
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(person,i) in getOurTeam" :key=i>
                        <OurTeamPerson :person="person"></OurTeamPerson>
                    </swiper-slide>
                </swiper>
                <ul class="swiper-pagination our-team-pagination" slot="pagination"></ul>
            </div>
        </div>
	</section>
</template>
<script>

import { swiper, swiperSlide } from 'vue-awesome-swiper'
import OurTeamPerson from './OurTeamPerson'
import { mapGetters } from 'vuex';
   
export default {
    data() {
        return {
            caption: 'Our Team',
            swiperOptions: {
                init: true,
                uniqueNavElements: true,
                slidesPerView: 3,
                loop: true,
                breakpoints: {
                    720: {
                        slidesPerView: 1
                    },        
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                    renderBullet(index, className) {
                        return `<li class="${className} swiper-pagination-bullet-custom"></li>`
                    }
                }
            }
        }
    },

    components: {
        swiper,
        swiperSlide,
        OurTeamPerson
    },

    computed: {
        ...mapGetters(['getOurTeam'])
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .section-our-team {
        h2 {
            color: $dark-blue;
        }
    }
    
    .our-team-list {
        position: relative;

        .swiper-container {
            margin-bottom: 40px;
        }
    }

    .our-team-pagination {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {
            @include animate(background-color);

            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: $gray;
            margin: 0 10px;
            outline: none;

            &:hover {
                cursor: pointer;
            }

            &.swiper-pagination-bullet-active {
                
                background-color: $primary;
            }
        }
    }
</style>