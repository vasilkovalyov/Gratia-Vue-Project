<template>
    <form class="form-contact" v-on:submit.prevent="sendContactForm()">
        <div class="row">
            <div class="col-6 inputs-date">
                <div class="row">
                    <div class="input-group" :class="{errorInput: $v.inputDate.$error}">
                        <DatePicker @getDatePickerInput="getDatePickerInput"></DatePicker>
                    </div>
                </div>
            </div>
            <div class="col-6 inputs-order-menu">
                <div class="row">
                    <div class="input-group">
                        <FormSelect 
                            selectPlaceholderName="hour"
                            :selectOptionList="hoursCountList"
                            @getSelectedValue="getSelectedValue($event,'inputHour')">
                        </FormSelect>
                    </div>
                    <div class="input-group">
                        <FormSelect 
                            selectPlaceholderName="people"
                            :selectOptionList="peopleCountList"
                            @getSelectedValue="getSelectedValue($event,'inputNumPeople')">
                        </FormSelect>
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
                    <FormSelect 
                        :selectOptionList="getAllProductsName" 
                        selectPlaceholderName="prepare menu"
                        @getSelectedValue="getSelectedValue($event,'chooseMenu')">
                    </FormSelect>
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
    import DatePicker from '@/components/FormComponents/DatePicker'
    import FormSelect from '@/components/FormComponents/FormSelect'
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                inputDate: '',
                inputHour: '',
                inputNumPeople: '',
                inputFullName: '',
                inputPhoneNumber: '',
                inputEmail: '',
                inputTextareaMsg: '',
                chooseMenu: '',
                hoursCountList: this.getArrayOfNumbers(24),
                peopleCountList: this.getArrayOfNumbers(100)
            }
        },
        validations: {
            inputDate: {
                required
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
            getDatePickerInput(datePickerValue) {
                this.inputDate = datePickerValue;
            },

            getSelectedValue(selectedValue, prop) {
                this[prop] = selectedValue;
            },

            sendContactForm() {
                const contactObj = {
                    inputDate: this.inputDate,
                    inputHour: this.inputHour,
                    inputNumPeople: this.inputNumPeople,
                    inputFullName: this.inputFullName,
                    inputPhoneNumber: this.inputPhoneNumber,
                    inputEmail: this.inputEmail,
                    inputTextareaMsg: this.inputTextareaMsg,
                    chooseMenu: this.chooseMenu
                };

                alert('Data sent');
            },

            getArrayOfNumbers(countNumInArray) {
                return (new Array(countNumInArray)).fill(1).map((a,i) => ++i);
            }
        },

        components: {
            DatePicker,
            FormSelect
        },

        computed: {
            ...mapGetters(['getAllProductsName'])
        },

        mounted() {
            
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

    .input-contact,
    .vs__dropdown-toggle {
        width: 100%;
        background-color: $white;
        border: 0;
        margin-bottom: 35px;
        border: 1px solid $black;
        height: 40px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: $bold;
        font-family: inherit;
        padding: 10px;
        border-radius: 0;
    }

    .vs__search {
        &:focus {
            margin: 0;
        }
    }

    .vs__selected {
        margin: 0;
    }

    .vs__dropdown-toggle {
        input {
            font-size: 14px;
            font-weight: $bold;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            text-transform: uppercase;
            font-family: $base-font-serif;
            text-align: center;
        }
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