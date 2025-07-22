<template>
    <div class="catlist">
        <CatItem />
        <CatItem />
        <CatItem /> 
        <CatItem />

        <CatItem />
        <CatItem />
        <CatItem />
        <CatItem />

        <CatItem />
        <CatItem />
        <CatItem />
        <CatItem />
    </div>
</template>

<script>
import CatItem from './CatItem.vue';

export default {
    name: 'CatList',
    components: { CatItem }
}
</script>

<style lang="scss" scoped>
.catlist {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    position: relative;
    // background-color: red;
    margin-top: 2em;
    gap: 80px;
}
</style>