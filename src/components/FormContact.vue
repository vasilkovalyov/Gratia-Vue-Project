<template>
    <form class="form-contact" v-on:submit.prevent="sendContactForm()">
        <div class="row">
            <div class="col-6 inputs-date">
                <div class="row">
                    <div class="input-group" :class="{errorInput: $v.inputDay.$error}">
                        <input type="text" placeholder="dd" class="input-contact" v-model.trim="inputDay">
                    </div>
                    <div class="input-group" :class="{errorInput: $v.inputMonth.$error}">
                        <input type="text" placeholder="mm" class="input-contact" v-model.trim="inputMonth">
                    </div>
                    <div class="input-group" :class="{errorInput: $v.inputYear.$error}">
                        <input type="text" placeholder="yyyy" class="input-contact" v-model.trim="inputYear">
                    </div>
                </div>
            </div>
            <div class="col-6 inputs-order-menu">
                <div class="row">
                    <div class="input-group">
                        <input type="text" placeholder="hour" class="input-contact" v-model.trim="inputHour">
                    </div>
                    <div class="input-group">
                        <input type="text" placeholder="number of people" class="input-contact" v-model.trim="inputNumPeople">
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <input type="text" placeholder="first name and last name" class="input-contact" v-model.trim="inputFullName">
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <input type="text" placeholder="phone number" class="input-contact" v-model.trim="inputPhoneNumber">
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <input type="text" placeholder="e-mail" class="input-contact" v-model.trim="inputEmail">
                </div>
            </div>
            <div class="col-6">
                <div class="input-group">
                    <input type="text" placeholder="prepare menu" class="input-contact">
                </div>
            </div>
            <div class="col">
                <textarea id="textarea-msg" class="textarea-input" cols="30" rows="10" placeholder="Your message" v-model.trim="inputTextareaMsg"></textarea>
            </div>
            <div class="col">
                <button type="submit" class="btn-submit">Send</button>
            </div>
        </div>
    </form>
</template>
<script>
    import { required, minLength, maxLength, email, between } from 'vuelidate/lib/validators'
    export default {
        data() {
            return {
                inputDay: '',
                inputMonth: '',
                inputYear: '',
                inputHour: '',
                inputNumPeople: '',
                inputFullName: '',
                inputPhoneNumber: '',
                inputEmail: '',
                inputTextareaMsg: ''
            }
        },
        validations: {
            inputDay: {
                required,
                minLength: minLength(1)
            },

            inputMonth: {
                required,
                minLength: minLength(1),
                between: between(1, 12)
            },

            inputYear: {
                required,
                minLength: minLength(4),
                between: between(2020, 2021)
            },

            inputHour: {
                required,
                minLength: minLength(1),
                between: between(0, 24)
            },

            inputNumPeople: {
                required,
                minLength: minLength(1)
            },

            inputFullName: {
                required,
            },

            inputPhoneNumber: {
                required,
            },

            inputEmail: {
                required,
                email,
                minLength: minLength(1)
            }
        },
        methods: {
            sendContactForm() {
                console.log(this.$v);
            }
        },

        mounted() {
            console.log(this.$v)
        }
    }
</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";

    .form-contact {
        font-family: $base-font-serif;
        box-shadow: 0px 0px 58px 9px rgba(245,246,247,1);
        .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
        }

        .col {
            width: 100%;
            padding: 0 15px;
        }

        .col-6 {
            width: 50%;
            padding: 0 15px;
        }
    }

    .input-contact {
        width: 100%;
        background-color: $white;
        border: 0;
        margin-bottom: 35px;
        border: 1px solid;
        height: 40px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: $bold;
        font-family: inherit;
        padding: 10px;
    }

    .inputs-date {
        .input-contact {
            text-align: center;
        }

        .input-group {
            flex: 1;
            padding: 0 15px;
        }
    }

    .textarea-input {
        font-family: inherit;
        font-size: 14px;
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
    }

    .btn-submit {
        @include animate(background-color);

        width: 100%;
        color: $white;
        text-transform: uppercase;
        background-color: $orange;
        height: 40px;
        border: 0;

        &:hover {
            cursor: pointer;

            &:hover {
                background-color: darken($orange, 10%);
            }
        }
    }

    .inputs-order-menu {
        .input-contact {
            text-align: center;
        }

        .input-group {
            flex: 1;
            padding: 0 15px;
        }
    }
</style>