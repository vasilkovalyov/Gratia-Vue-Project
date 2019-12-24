<template>
	<div class="menu-card-category">
        <div class="image-holder" :style="{ backgroundImage: 'url(images/' + objProps.image + ')' }"></div>
        <div class="card-body">
            <h3>{{objProps.caption}}</h3>
            <div class="description">
                <p>{{objProps.description}}</p>
            </div>
        </div>
        <router-link :to="'/category-menu/'+objProps.categoryName" tag='a' class="link"></router-link>
    </div>
</template>
<script>


export default {
    props: ["objProps"],
    data() {
        return {
            
        }
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .menu-card-category {
        position: relative;
        background-color: $white;
        width: 100%;
        margin-bottom: 40px;
        box-shadow: 0px 0px 20px 0px #c7c7d6;
        @include animate(transform);

        &:hover {
            transform: scale(1.05);
        }

        .image-holder {
            background-size: cover;
            background-position: center;
            height: 50vw;

            @include media(">=phone") {
                height: 30vw;
            }

            @include media(">=tablet") {
                height: 14vw;
            }

            @include media(">=desktop") {
            }
        }

        .card-body {
            padding: 20px 15px;
            text-align: center;

            @include media(">=desktop") {
                padding: 35px;
            }
        }

        h3 {
            font-size: 24px;
            color: $dark-blue;
            display: inline-block;
            line-height: 1;

            @include media(">=desktop") {
                font-size: 30px;
            }
            
            a {
                @include animate(color);
                color: inherit;
                text-decoration: none;

                &:hover {
                    color: $primary;
                }
            }
        }

        .description {
            font-size: 20px;

            @include media(">=1440px") {
                font-size: 24px;
            }
        }

        p {
            font-size: inherit;
            margin-bottom: 5px;
        }

        .link {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
        }
    }
</style>