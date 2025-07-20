<template>
    <div class="homeblog">
        <div class="homeblog__block">
            <div class="homeblog__block--left">
                <Transition name="uptitle-appear" appear>
                <p class="homemarket__block--left__uptitle">
                    ОСТАВАЙТЕСЬ В КУРСЕ
                </p>
                </Transition>
                <Transition name="title-appear" appear>
                <p class="homeblog__block--left__title">Следите за новостями <br> в нашем блоге</p>
                </Transition>
                <Transition name="text-appear" appear>
                <p class="homeblog__block--left__text">Регулярно оповещаем вас на сайте, а также в наших социальных сетях</p>
                </Transition>
                <Transition name="button-appear" appear>
                <div class="homeblog__block--left__buttonline">
                    <button class="homeblog__block--left__buttonline__button--first">
                        ОТКРЫТЬ БЛОГ
                    </button>
                    <!-- <button class="homeblog__block--left__buttonline__button--second">
                        НАПИСАТЬ НАМ
                    </button> -->
                </div>
                </Transition>
            </div>
            <div class="homeblog__block--right">
                <Transition name="image-appear" appear>
                <img src="../assets/blog.png" alt="" class="homeblog__block--right__img">
                </Transition>
            </div>
        </div>
        <Transition name="light-appear" appear>
        <div class="homeblog__light"></div>
        </Transition>
    </div>
</template>

<script>

export default {
    name: "HomeBlog"
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
    .uptitle-appear-enter-active {
        animation: left-appear-in 1.3s ease;
    }
    .light-appear-enter-active {
        animation: light-appear-in 1.75s ease;
    }


    .homeblog {
        width: 100%;
        height: 80vh;
        position: relative;
        display: flex;
        background-color: #01002F;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
    }
    .homeblog__block {
        max-width: 1690px;
        height: auto;
        background-color: 01002F;
        position: relative;
        display: flex;
        z-index: 300;
    }
    .homeblog__block--left {
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
    .homemarket__block--left__uptitle {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        color: #AAD9D9;
        font-size: 1.45em;
        font-weight: 600;
        font-family: 'Outfit', sans-serif;
        margin-left: 140px;
        margin-top: 150px;
    }
    .homeblog__block--left__title {
        width: auto;
        height: auto;
        position: relative;
        display: flex;
        color: #FFFFFF;
        font-size: 3.56em;
        font-weight: bold;
        font-family: 'Outfit', sans-serif;
        padding-left: 2.27em;
        padding-top: 0.35em;
        box-sizing: border-box;
    }
    .homeblog__block--left__text {
        max-width: 560px;
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
    .homeblog__block--left__buttonline {
        max-width: 650px;
        height: auto;
        position: relative;
        display: flex;
        margin-left: 105px;
        margin-top: 60px;
        background-color: rgba($color: #000000, $alpha: 0);
    }
    .homeblog__block--left__buttonline__button--first {
        max-width: 335px;
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
    .homeblog__block--left__buttonline__button--first:hover {
        transform: translateY(-8px);
        box-shadow: 5px 10px 20px #94CFD0;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .homeblog__block--left__buttonline__button--second { 
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
    .homeblog__block--left__buttonline__button--second:hover {
        transform: translateY(-8px);
        box-shadow: 5px 10px 20px #94CFD0;
        transition: all 0.3s ease;
        cursor: pointer;
    }
    .homeblog__block--right { // ***TODO***
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
    .homeblog__block--right__img {
        // box-shadow: 5px 10px 20px #94CFD0;
        filter: drop-shadow(0 0 1.75rem #94CFD0);
        transition: all 0.35s ease;
        // min-width: none;
        // flex-shrink: 0;
    }
    .homeblog__block--right__img:hover {
        transform: scale(1.04);
        filter: drop-shadow(0 0 2rem #94CFD0);
        cursor: pointer;
        transition: all 0.35s ease;
    }

    .homeblog__light {
        width: 650px;
        height: 650px;
        background-color: #0306F0;
        position: absolute;
        left: -15%;
        bottom: -50%;
        z-index: 200;
        // filter: drop-shadow(0 0 1.75rem #94CFD0);
        border-radius: 50%;
        filter: blur(200px);
        overflow: hidden;
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
        transform: translateX(-700px) scale(0.35);
        // transform: scale(0.35);
        // filter: blur(0px);
    }
    100% {
        transform: translateX(0px) scale(1);
        // transform: scale(1);
        // filter: blur(200px);
    }
    }
</style>