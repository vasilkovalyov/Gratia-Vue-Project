<template>
	<footer id='footer' class='footer'>
        <div class="container">
            <div class="logo-footer">
                <div class="image-holder">
                    <img src="images/logo-02.png" alt="#">
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
            copyright: 'Copyright 2016. All rights reserved by symu',
            captionFooter: 'Gratia Restaurant',
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

    .footer {
        text-align: center;

        .logo-footer {
            position: relative;
            background-color: $white;
            margin: 0 auto 10px;
            width: 130px;
            height: 130px;
            border: 1px solid $gray-300;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

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
                right: 130px;
            }

            &:after {
                right: -1000%;
                left: 130px;
            }
        }

        .image-holder {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
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
            margin-bottom: 64px;
        }
    }
</style>
