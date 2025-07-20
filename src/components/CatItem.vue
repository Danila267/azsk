<template>
    <div class="catitem">
        <img src="" alt="" class="catitem__picture">
        <div class="catitem__bottom">
            <p class="catitem__bottom__title">Все категории</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatItem'
}
</script>

<style lang="scss" scoped>
.catitem {
    width: 312px;
    height: 462px;
    background-color: #E7E8E7;
    border-radius: 45px;
    display: flex;
    flex-direction: column;
    position: relative;
}
.catitem__bottom {
    width: 100%;
    height: 171px;
    position: absolute;
    bottom: 0;
    // border-radius: 35px;
    border-bottom-left-radius: 45px;
    border-bottom-right-radius: 45px;
    background-color: #2C6485;
    display: flex;
    justify-content: center;
    align-items: center;
}
.catitem__bottom__title {
    position: relative;
    width: auto;
    height: auto;
    font-size: 1.5em;
    font-weight: 600;
    color: #FFFFFF;
    font-family: 'Outfit', sans-serif;
    // padding-left: 0.35em;
    // padding-top: 0.35em;
    box-sizing: border-box;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%)
}
</style>