<template>
  	<div class="our-team-person">
        <div class="image-holder" :style="{ backgroundImage: 'url(/images/' + person.image + ')' }"></div>
        <div class="card-body">
            <span class="person-name">{{person.name}}</span>
            <span class="person-position">{{person.position}}</span>
            <ul class="social-list">
                <li v-for="item in person.socialList" :key="item.id">
                    <a :href="item.link">
                        <span :class="item.nameIcon"></span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>


export default {
    props: ["person"],
    data() {
        return {
            
        }
    },

    components: {
        
    },
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .our-team-person {
        position: relative;
        text-align: center;

        @include media(">=desktop") {
            max-width: 300px;
            width: 100%;
            margin: 0 auto;
        }

        &:hover {
            .image-holder {
                &:before {
                    transform: translate(-50%,-50%) scale(1);
                }
            }

            .person-name {
                transform: scale(1);
            }

            .person-position {
                transform: scale(1);
            }

            .social-list {
                transform: scale(1);
            }
        }

        .card-body {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            color: $white;
        }

        .image-holder {
            display: inline-block;
            position: relative;
            width: 200px;
            height: 200px;
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            overflow: hidden;

            @include media(">=desktop") {
                width: 300px;
                height: 300px;
            }

            &:before {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 90%;
                height: 90%;
                transform: translate(-50%,-50%) scale(0);
                background: rgba($gray, 0.8);
                z-index: 0;
                border-radius: 50%;

                @include animate(transform);
            }
        }

        .person-name {
            display: block;
            margin-bottom: 10px;
            transform: scale(0);
            @include animate(transform);
        }

        .person-position {
            display: block;
            margin-bottom: 20px;
            transform: scale(0);
            @include animate(transform);
        }

        .social-list {
            color: lighten($primary, 10%);
            transform: scale(0);
            @include animate(transform);

            a {
                color: inherit;

                &:hover {
                    color: $white;
                }
            }
        }
    }
</style>