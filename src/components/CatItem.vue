<template>
    <div class="catitem">
        <img :src="category.img" alt="" class="catitem__picture">
        <div class="catitem__bottom">
            <p class="catitem__bottom__title">{{ category.name }}</p> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'CatItem',
    props: ['category']
}
</script>

<style lang="scss" scoped>
.catitem {
    width: 282px;
    height: 402px;
    background-color: #d2d3e6;
    border-radius: 45px;
    display: flex;
    flex-direction: column;
    position: relative;
    // box-shadow: 5px 5px 20px #b0b0c0;
    border: 3px #b0b0b0 solid;
    transition: all 0.3s ease;
}
.catitem:hover {
    transform: translateY(-10px);
    box-shadow: 3px 3px 15px #b0b0c0;
    transition: all 0.3s ease;
    cursor: pointer;
}
.catitem__picture {
    width: auto;
    height: 291px;
    object-fit: contain;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 20px;
    border-radius: 45px;
    box-sizing: border-box;
    transition: all 0.3s ease;
}
.catitem:hover .catitem__picture {
    filter: opacity(80%);
    transition: all 0.3s ease;
}
.catitem__bottom {
    width: 100%;
    height: 114px;
    position: absolute;
    bottom: 0;
    // border-radius: 35px;
    border-bottom-left-radius: 45px;
    border-bottom-right-radius: 45px;
    // background-color: rgba($color: #5c44b9, $alpha: 1);
    // border: 1px solid #e9e9e94f;
    background-color: #5c44b9;
    display: flex;
    justify-content: center;
    align-items: center;
    /* From https://css.glass */
}
.catitem__bottom__title {
    position: relative;
    width: 70%;
    height: auto;
    font-size: 1.5em;
    font-weight: 600;
    color: #d2d3e6;
    font-family: 'Outfit', sans-serif;
    // padding-left: 0.35em;
    // padding-top: 0.35em;
    box-sizing: border-box;
    // flex-wrap: wrap;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%)
}
</style>