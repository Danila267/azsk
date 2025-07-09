<template>
    <div class="homeprice">
        <div class="homeprice__block">
            <div class="homeprice__block--left">
                <p class="homeprice__block--left__title">Самые <br>Выгодные<br>Цены</p>
                <p class="homeprice__block--left__text">Мы предлагаем оборудование для АГЗС и АЗС по лучшим ценам в нашем каталоге</p>
                <div class="homeprice__block--left__buttonline">
                    <button class="homeprice__block--left__buttonline__button--first">
                        КАТАЛОГ
                    </button>
                    <button class="homeprice__block--left__buttonline__button--second">
                        НАПИСАТЬ НАМ
                    </button>
                </div>
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
        background-color: #01002F;
        justify-content: center;
        align-items: flex-start;
    }
    .homeprice__block {
        max-width: 1690px;
        height: auto;
        background-color: 01002F;
        position: relative;
        display: flex;
    }
    .homeprice__block--left {
        background-color: 01002F;
        flex-grow: 0;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 0;
        max-width: 922px;
    }
    .homeprice__block--left__title {
        width: auto;
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
        max-width: 600px;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 1.25em;
        padding-left: 130px;
        padding-top: 15px;
        box-sizing: border-box;
    }
    .homeprice__block--left__buttonline {
        max-width: 700px;
        height: auto;
        position: relative;
        display: flex;
        margin-left: 105px;
        margin-top: 60px;
        background-color: #01002F;
    }
    .homeprice__block--left__buttonline__button--first {
        max-width: 265px;
        height:80px;
        align-self: flex-start;
        font-size: 1.5em;
        color: #FFFFFF;
        font-weight: 600;
        background-color: #8D8CDA;
        border: 0px #8D8CDA solid;
        border-radius: 80px;
        transition: all 0.3s ease;
    }
    .homeprice__block--left__buttonline__button--first:hover {
        transform: translateY(-8px);
        box-shadow: 5px 10px 20px #94CFD0;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .homeprice__block--left__buttonline__button--second { 
        max-width: 334px;
        height: 80px;
        margin-left: auto;
        font-size: 1.5em;
        color: #FFFFFF;
        font-weight: 600;
        border: 5px #94CFD0 solid;
        border-radius: 80px;
        background-color: #01002F;
        transition: all 0.3s ease;
    }
    .homeprice__block--left__buttonline__button--second:hover {
        transform: translateY(-8px);
        box-shadow: 5px 10px 20px #94CFD0;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .homeprice__block--right { // ***TODO***
        width: 768px;
        height: auto;
        object-fit: contain;
        margin-right: 6em;
    }
</style>