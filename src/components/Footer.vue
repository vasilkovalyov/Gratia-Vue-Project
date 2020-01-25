<template>
	<footer id='footer' class='footer'>
        <div class="container">
            <div class="logo-footer">
                <div class="image-holder">
                    <img src="/images/logo-02.png" alt="#">
                </div>
            </div>
            <div class="footer-content">
                <span class="page-footer-caption">{{captionFooter}}</span>
                <span class="copyright">{{copyright}}</span>
                <ul class="social-list">
                    <li v-for="item in socialList" :key='socialList[item]'>
                        <a :class=item.icon target="_blank" :href=item.link></a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  	data() {
		return {
            copyright: `Copyright 2019. All rights reserved by symu`,
            captionFooter: 'Gratia Restaurant',
            currentYear: null,
            socialList: [
                {
                    icon: 'icon-facebook',
                    link: 'https://www.facebook.com/'
                },
                {
                    icon: 'icon-twitter',
                    link: 'https://twitter.com/?lang=en'
                },
                {
                    icon: 'icon-instagram',
                    link: 'https://www.instagram.com/?hl=en'
                }
            ]
		}
    }
}
</script>

<style scoped lang="scss">
    @import "@/assets/scss/style.scss";

    #footer {
        background: $base-background-footer;
        padding: 30px 0;
    }

    .footer {
        text-align: center;

        .logo-footer {
            position: relative;
            background-color: $white;
            margin: 0 auto 30px;
            width: 90px;
            height: 90px;
            border: 1px solid $gray-300;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            @include media(">=desktop") {
                width: 130px;
                height: 130px;
                margin: 0 auto 10px;
            }

            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                height: 1px;
                background-color: $gray-300;
            }

            &:before {
                left: -1000%;
                right: 90px;

                @include media(">=desktop") {
                    right: 130px;
                }
            }

            &:after {
                right: -1000%;
                left: 90px;

                @include media(">=desktop") {
                    left: 130px;
                }
            }
        }

        .image-holder {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            overflow: hidden;

            @include media(">=desktop") {
                width: 80px;
                height: 80px;
            }
        }

        .page-footer-caption {
            font-size: 18px;
            font-weight: $bold;
            color: $dark-blue-300;
            font-family: $base-font-serif;
            margin-bottom: 12px;
            display: block;
        }

        .copyright {
            display: block;
            position: relative;
            margin-bottom: 20px;

            @include media(">=desktop") {
                margin-bottom: 64px;
            }

            &:after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 100px;
                height: 1px;
                background-color: $gray-400;

                @include media(">=desktop") {
                    bottom: -35px;
                }
            }
        }
    }
</style>
