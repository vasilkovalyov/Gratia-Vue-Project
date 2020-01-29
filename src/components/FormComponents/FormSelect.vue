<template>
    <div class="select-holder">
        <v-select v-model="getSelectedValue" :options="selectOptionList" input-class="input-contact" :placeholder="selectPlaceholderName"></v-select>
    </div>
</template>
<script>
    import vSelect from 'vue-select'
    import 'vue-select/src/scss/vue-select.scss'

    export default {
        props: ['selectOptionList','selectPlaceholderName'],

        data() {
            return {
                getSelectedValue: 0
            }
        },

        watch: {
            getSelectedValue() {
                this.$emit('getSelectedValue', this.getSelectedValue);
            }
        },

        components: {
            vSelect
        }
    }

</script>