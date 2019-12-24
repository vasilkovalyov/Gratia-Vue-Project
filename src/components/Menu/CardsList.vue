<template>
	<div class="menu-card-category-list">
        <div class="row">
            <div class="col" v-for="(card,key) in cardList" :key="key">
                <CardCategory :card="card"></CardCategory>
            </div>
        </div>
    </div>
</template>
<script>

import CardCategory from './CardCategory'


export default {
    props: ["cardList"],

    components: {
        CardCategory
    }
}

</script>
<style lang="scss">
    @import "@/assets/scss/style.scss";
    
</style>