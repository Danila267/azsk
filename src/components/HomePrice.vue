<template>
    <div class="homeprice">
        <div class="homeprice__block">
            <div class="homeprice__block--left">
                <Transition name="title-appear" appear>
                <p class="homeprice__block--left__title">Самые <br>Выгодные<br>Цены</p>
                </Transition>
                <Transition name="text-appear" appear>
                <p class="homeprice__block--left__text">Gas Market предлагает оборудование для АГЗС и АЗС по лучшим ценам в нашем каталоге</p>
                </Transition>
                <Transition name="button-appear" appear>
                <div class="homeprice__block--left__buttonline">
                    <button class="homeprice__block--left__buttonline__button--first">
                        КАТАЛОГ
                    </button>
                    <button class="homeprice__block--left__buttonline__button--second">
                        НАПИСАТЬ НАМ
                    </button>
                </div>
                </Transition>
            </div>
            <div class="homeprice__block--right">
                <Transition name="image-appear" appear>
                <img src="../assets/nasos3.png" alt="" class="homeprice__block--right__img">
                </Transition>
                <!-- <img src="../assets/graynasos.png" alt="" class="homeprice__block--right__img--second"> -->
            </div>
        </div>
        <Transition name="light-appear" appear>
        <div class="homeprice__light"></div>
        </Transition>
    </div>
</template>

<script>

export default {
    name: "HomePrice"
}
</script>

<style lang="scss" scoped>

    .title-appear-enter-active {
        animation: left-appear-in 1.25s ease;
    }
    .text-appear-enter-active {
        animation: left-appear-in 1s ease;
    }
    .button-appear-enter-active {
        animation: down-appear-in 1.1s ease;
    }
    .image-appear-enter-active {
        animation: right-appear-in 1.5s ease;
    }
    .light-appear-enter-active {
        animation: light-appear-in 1.75s ease;
    }


    .homeprice {
        width: 100%;
        // height: 80vh;
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
        z-index: 300;
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
        font-family: 'Outfit', sans-serif;
        padding-left: 1.5em;
        padding-top: 0.35em;
        box-sizing: border-box;
    }
    .homeprice__block--left__text {
        max-width: 620px;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 1.25em;
        font-family: 'Outfit', sans-serif;
        padding-left: 130px;
        padding-top: 15px;
        box-sizing: border-box;
    }
    .homeprice__block--left__buttonline {
        max-width: 650px;
        height: auto;
        position: relative;
        display: flex;
        margin-left: 105px;
        margin-top: 60px;
        background-color: rgba($color: #000000, $alpha: 0);
    }
    .homeprice__block--left__buttonline__button--first {
        max-width: 265px;
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
        font-family: 'Outfit', sans-serif;
        border: 5px #76acad solid;
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
    .homeprice__block--right__img {
        // box-shadow: 5px 10px 20px #94CFD0;
        filter: drop-shadow(0 0 1.75rem #94CFD0);
        transition: all 0.35s ease;
        // min-width: none;
        // flex-shrink: 0;
        z-index: 200;
    }
    .homeprice__block--right__img:hover {
        transform: scale(1.04);
        filter: drop-shadow(0 0 2rem #94CFD0);
        cursor: pointer;
        transition: all 0.35s ease;
    }
    .homeprice__block--right__img--second {
        position:absolute;
        right: 0px;
        z-index: 250;
    }

    .homeprice__light {
        width: 650px;
        height: 650px;
        background-color: #AAD9D9;
        position: absolute;
        right: -15%;
        bottom: -50%;
        z-index: 200;
        // filter: drop-shadow(0 0 1.75rem #94CFD0);
        border-radius: 50%;
        filter: blur(200px);
    }


@media (max-width: 880px) { // adjust breakpoint as needed
    .homeprice__block--right { // ***TODO***
        // width: 648px;
        // height: auto;
        // // flex-shrink: 0;
        // min-width: 648px;
        // object-fit: contain;
        // margin-right: 6em;
        // animation: animate 5s ease-in-out infinite;
        // animation-name: anima-homeprice-circle;
        // animation-duration: 5s;
        display: none;
    }

    .homeprice__block--left__title {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 4.7em;
        font-weight: bold;
        font-family: 'Outfit', sans-serif;
        padding-left: 20px;
        padding-top: 0.35em;
        box-sizing: border-box;
    }
    .homeprice__block--left__text {
        max-width: 620px;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 1.12em;
        font-family: 'Outfit', sans-serif;
        padding-left: 20px;
        padding-top: 15px;
        box-sizing: border-box;
    }

    .homeprice__block--left__buttonline {
        max-width: 450px;
        height: auto;
        position: relative;
        display: flex;
        margin-left: 8px;
        margin-top: 60px;
        gap: 16px;
        background-color: rgba($color: #000000, $alpha: 0);
    }

    .homeprice__block--left__buttonline__button--first {
        max-width: 190px;
        height:70px;
        align-self: flex-start;
        font-size: 1.3em;
        color: #FFFFFF;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        background-color: #8D8CDA;
        border: 0px #8D8CDA solid;
        border-radius: 80px;
        transition: all 0.3s ease;
    }

    .homeprice__block--left__buttonline__button--second { 
        max-width: 280px;
        height: 70px;
        margin-left: auto;
        font-size: 1.3em;
        color: #FFFFFF;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        border: 5px #76acad solid;
        border-radius: 80px;
        background-color: #01002F;
        transition: all 0.3s ease;
    }
    .homeprice__light {
        display: none;
    }
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

    @keyframes light-appear-in {
    0% {
        transform: translateX(800px) scale(0.35);
        // transform: scale(0.35);
        filter: blur(0px);
    }
    100% {
        transform: translateX(0px) scale(1);
        // transform: scale(1);
        filter: blur(200px);
    }
    }
</style>