<template>
    <div class="catmain">
        <div class="catmain__block">
            <div class="catmain__block__title">Категории</div>
            <CatList />
        </div>
    </div>
</template>

<script>
import CatList from './CatList.vue';

export default {
    name: 'CatMain',
    components: { CatList }
}
</script>

<style lang="scss" scoped>
.catmain {
    width: 100%;
    height: 80vh;
    position: relative;
    display: flex;
    background-color: #01002F;
    justify-content: center;
    align-items: flex- 
}
.catmain__block {
    max-width: 1690px;
    height: auto;
    background-color: #afc985;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 300;
}
.catmain__block__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 5.4em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding-left: 0.35em;
    padding-top: 0.35em;
    box-sizing: border-box;
}
</style>