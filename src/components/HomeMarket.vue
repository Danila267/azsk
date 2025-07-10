<template>
    <div class="homemarket">
        <div class="homemarket__block">
            <div class="homemarket__block--left">
                <Transition name="image-appear" appear>
                <img src="../assets/prelast4.png" alt="" class="homemarket__block--left__img">
                </Transition>
            </div>
            <div class="homemarket__block--right">
                <Transition name="uptitle-appear" appear>
                <p class="homemarket__block--right__uptitle">
                    ФАКТЫ
                </p>
                </Transition>
                <Transition name="title-appear" appear>
                <p class="homemarket__block--right__title">Gas market - лидеры <br> в своём деле</p>
                </Transition>
                <Transition name="text-appear" appear>
                <p class="homemarket__block--right__text">Основанные в 2007 году, вы остаёмся одной из лидирующих фирм по обслуживанию нефтебаз, АЗГС и АЗС.</p>
                </Transition>
                <Transition name="button-appear" appear>
                <div class="homemarket__block--right__buttonline">
                    <button class="homemarket__block--right__buttonline__button--first">
                        ЧТО В НАЛИЧИИ
                    </button>
                    <!-- <button class="homemarket__block--right__buttonline__button--second">
                        НАПИСАТЬ НАМ
                    </button> -->
                </div>
                </Transition>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "HomeMarket"
}
</script>

<style lang="scss" scoped>

    .title-appear-enter-active {
        animation: right-appear-in 1.25s ease;
    }
    .text-appear-enter-active {
        animation: right-appear-in 1s ease;
    }
    .button-appear-enter-active {
        animation: down-appear-in 1.1s ease;
    }
    .image-appear-enter-active {
        animation: left-appear-in 1.5s ease;
    }
    .uptitle-appear-enter-active {
        animation: right-appear-in 1.3s ease;
    }


    .homemarket {
        width: 100%;
        height: 80vh;
        position: relative;
        display: flex;
        background-color: #01002F;
        justify-content: center;
        align-items: flex-start;
    }
    .homemarket__block {
        max-width: 1690px;
        height: auto;
        background-color: 01002F;
        position: relative;
        display: flex;
    }
    .homemarket__block--left { // ***TODO***
        width: 648px;
        height: auto;
        // flex-shrink: 0;
        min-width: 648px;
        object-fit: contain;
        margin-right: 6em;
        animation: animate 5s ease-in-out infinite;
        animation-name: anima-homeprice-circle;
        animation-duration: 5s;
    }
    .homemarket__block--left__img {
        // box-shadow: 5px 10px 20px #94CFD0;
        filter: drop-shadow(0 0 1.75rem #94CFD0);
        // min-width: none;
        // flex-shrink: 0;
    }
    .homemarket__block--right {
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
    .homemarket__block--right__uptitle {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        color: #AAD9D9;
        font-size: 1.45em;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        margin-top: 100px;
    }
    .homemarket__block--right__title {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 3.56em;
        font-weight: bold;
        font-family: 'Outfit', sans-serif;
        // font-family: PT+Sans, 'Source Sans Pro';
        // padding-left: 1.5em;
        padding-top: 0.35em;
        box-sizing: border-box;
    }
    .homemarket__block--right__text {
        max-width: 640px;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 1.35em;
        font-family: 'Outfit', sans-serif;
        // padding-left: 130px;
        padding-top: 15px;
        box-sizing: border-box;
    }
    .homemarket__block--right__buttonline {
        max-width: 650px;
        height: auto;
        position: relative;
        display: flex;
        // margin-left: 105px;
        margin-top: 60px;
        background-color: #01002F;
    }
    .homemarket__block--right__buttonline__button--first {
        max-width: 353px;
        height:80px;
        align-self: flex-start;
        font-size: 1.5em;
        color: #FFFFFF;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        background-color: #8D8CDA;
        border: 0px #8D8CDA solid;
        border-radius: 80px;
        transition: all 0.3s ease;
        margin-left: 70px;
    }
    .homemarket__block--right__buttonline__button--first:hover {
        transform: translateY(-8px);
        box-shadow: 5px 10px 20px #94CFD0;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .homemarket__block--right__buttonline__button--second { 
        max-width: 334px;
        height: 80px;
        margin-left: auto;
        font-size: 1.5em;
        color: #FFFFFF;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        border: 5px #76acad solid;
        border-radius: 80px;
        background-color: #01002F;
        transition: all 0.3s ease;
    }
    .homemarket__block--right__buttonline__button--second:hover {
        transform: translateY(-8px);
        box-shadow: 5px 10px 20px #94CFD0;
        transition: all 0.3s ease;
        cursor: pointer;
    }

    @keyframes left-appear-in {
    0% {
        transform: translateX(-700px);
    }
    100% {
        transform: translateX(0px);
    }
    }
    @keyframes right-appear-in {
    0% {
        transform: translateX(800px);
    }
    100% {
        transform: translateX(0px);
    }
    }
    @keyframes down-appear-in {
    0% {
        transform: translateY(700px);
    }
    100% {
        transform: translateX(0px);
    }
    }

    @keyframes anima-homeprice-circle {
    0% {
        transform: translate(0%, -2%);
    }

    35% {
        transform: translate(3%, -1%);
    }

    70% {
        transform: translate(-3%, 0%);
    }

    100% {
        transform: translate(0%, -2%);
    }
}
</style>