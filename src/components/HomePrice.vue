<template>
    <div class="homeprice">
        <div class="homeprice__block">
            <div class="homeprice__block--left">
                <p class="homeprice__block--left__title">Самые <br>Выгодные<br>Цены</p>
                <p class="homeprice__block--left__text">Мы предлагаем оборудование для АГЗС и АЗС по лучшим ценам в нашем каталоге</p>
                <div class="homeprice__block--left__buttonline"></div>
            </div>
            <img src="../assets/nasos3.png" alt="" class="homeprice__block--right">
        </div>
    </div>
</template>

<script>

export default {
    name: "HomePrice"
}
</script>

<style lang="scss" scoped>
    .homeprice {
        width: 100%;
        height: 80vh;
        position: relative;
        display: flex;
        background-color: blue;
        justify-content: center;
        align-items: flex-start;
    }
    .homeprice__block {
        width: 1690px;
        height: 650px;
        background-color: cadetblue;
        position: relative;
        display: flex;
    }
    .homeprice__block--left {
        background-color: darkred;
        // flex-grow: 0.6;
        flex-shrink: 3;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 0;
    }
    .homeprice__block--left__title {
        width: 100%;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 5.4em;
        font-weight: bold;
        padding-left: 1.5em;
        padding-top: 0.35em;
        box-sizing: border-box;
    }
    .homeprice__block--left__text {
        width: 600px;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 1.25em;
        padding-left: 130px;
        box-sizing: border-box;
    }
    .homeprice__block--right {
        width: 768px;
        height: auto;
        object-fit: contain;
        margin-right: 6em;
    }
</style>