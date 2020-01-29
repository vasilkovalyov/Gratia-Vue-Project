<template>
    <div class="datepicker-holder">
        <date-picker v-model="getDatePickerInput" type="date"
            :value-type="valueType"  
            :format="format" 
            :placeholder="placeholder" 
            :input-class="inputClass">
        </date-picker>
    </div>
</template>
<script>
    import DatePicker from 'vue2-datepicker';
    import 'vue2-datepicker/index.css';

    export default {
        data() {
            return {
                getDatePickerInput: null,
                format: "DD-MM-YYYY",
                placeholder: "dd",
                inputClass: "input-contact",
                valueType: "format"
            }
        },

        watch: {
            getDatePickerInput() {
                this.$emit('getDatePickerInput', this.getDatePickerInput)
            }
        },

        components: {
            DatePicker
        }
    }

</script>

<style lang="scss">
    .mx-datepicker {
        width: 100%;
    }

    .mx-datepicker {
        margin-bottom: 35px;

        input {
            margin: 0;
        }
    }
</style>