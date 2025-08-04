<template>
    <div class="logmain">
        <div class="logmain__block">
            <Transition name="title-appear" appear>
            <p class="logmain__block__title">Технопроект</p>
            </Transition>
            <Transition name="circums-appear" appear>
            <p class="logmain__block__circums">43 совпадений найдено</p>
            </Transition>
            <Transition name="sortblock-appear" appear>
            <div class="logmain__block__sortblock">
                <div class="logmain__block__sortblock__filter">
                    <img src="../assets/catalog/filter5.png" alt="" class="logmain__block__sortblock__filter__img">
                    <p class="logmain__block__sortblock__filter__text">Все фильтры</p>
                </div>
                <div class="logmain__block__sortblock__sorting">
                    <img src="../assets/catalog/sorting3.png" alt="" class="logmain__block__sortblock__sorting__img">
                    <p class="logmain__block__sortblock__sorting__text">По популярности</p>
                    <img src="../assets/catalog/arrowgray.png" alt="" class="logmain__block__sortblock__grayarrow">
                </div>
                <div class="logmain__block__sortblock__catcheck">
                    <p class="logmain__block__sortblock__catcheck__text">Категория</p>
                    <img src="../assets/catalog/arrowgray.png" alt="" class="logmain__block__sortblock__grayarrow">
                </div>
            </div>
            </Transition>
            <LogList />
        </div>
    </div>
</template>

<script>
import LogList from './LogList.vue';

export default {
    name: 'LogMain',
    components: { LogList, }
}

</script>

<style lang="scss" scoped>
    .title-appear-enter-active {
        animation: up-appear-in 1.25s ease;
    }
    .circums-appear-enter-active {
        animation: up-appear-in 1s ease;
    }
    .sortblock-appear-enter-active {
        animation: left-appear-in 0.9s ease;
    }


.logmain {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    background-color: #01002F;
    // background-color: #0400d4;
    justify-content: center;
    align-items: flex-start;
}
.logmain__block {
    max-width: 1690px;
    height: auto;
    // background-color: #afc985;
    background-color: #01002F;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 300;
}
.logmain__block__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 5.4em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    padding-left: 0.35em;
    padding-top: 0.35em;
    box-sizing: border-box;
}
.logmain__block__circums {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #C4C4C4;
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding-left: 1.8em;
    top: -0.35em;
    box-sizing: border-box;
}
.logmain__block__sortblock {
    max-width: 800px;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    // background-color: aqua;
    background-color: #01002F;
    justify-content:space-between;
    margin-top: 10px;
    margin-left: 15px;
}
.logmain__block__sortblock__filter {
    flex-basis: 250px;
    height: 50px;
    position: relative;
    display: flex;
    background-color: #010027;
    border-radius: 20px;
    border: 3px solid #ffffff;
    box-sizing: border-box;
    min-width: 0;
    // flex-wrap: nowrap;
    transition: all 0.3s ease;
}
.logmain__block__sortblock__filter:hover {
    cursor: pointer;
    filter: brightness(80%);
    transition: all 0.3s ease;
}
.logmain__block__sortblock__filter__img {
    flex-basis: 50px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    margin-left: 5px;
    user-select: none;
}
.logmain__block__sortblock__filter__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    padding-left: 0.2em;
    // padding-right: 60px;
    align-self: center;
    box-sizing: border-box;
    min-width: 0px;
    flex-wrap: nowrap;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
}
.logmain__block__sortblock__sorting {
    flex-basis: 309px;
    height: 50px;
    position: relative;
    display: flex;
    // background-color: blueviolet;
    background-color: #010027;
    border-radius: 20px;
    transition: all 0.3s ease;
}
.logmain__block__sortblock__sorting:hover {
    cursor: pointer;
    filter: brightness(80%);
    transition: all 0.3s ease;
}
.logmain__block__sortblock__sorting__img {
    width: 50px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    user-select: none;
    transition: all 0.3s ease;
}
.logmain__block__sortblock__sorting:hover .logmain__block__sortblock__grayarrow {
    transform: rotateZ(180deg);
    transition: all 0.3s ease;

}
.logmain__block__sortblock__sorting__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    // padding-left: 0.35em;
    align-self: center;
    box-sizing: border-box;
    min-width: 0px;
    flex-wrap: nowrap;
    overflow: hidden;
    white-space: nowrap;
    user-select: none;
}
.logmain__block__sortblock__catcheck {
    flex-basis: 185px;
    height: 50px;
    position: relative;
    display: flex;
    // background-color: green;
    background-color: #010027;
    border-radius: 20px;
    justify-content: space-evenly;
    transition: all 0.3s ease;
}
.logmain__block__sortblock__catcheck:hover {
    cursor: pointer;
    filter: brightness(80%);
    transition: all 0.3s ease;
}
.logmain__block__sortblock__catcheck:hover .logmain__block__sortblock__grayarrow {
    transform: rotateZ(180deg);
    transition: all 0.3s ease;
}
.logmain__block__sortblock__catcheck__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    padding-left: 0.35em;
    align-self: center;
    box-sizing: border-box;
    user-select: none;
}
.logmain__block__sortblock__grayarrow {
    width: 28px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    top: 3%;
    padding-left: 5px;
    padding-right: 10px;
    user-select: none;
    // margin-left: auto;
    // margin-right: 10px;
    transition: all 0.3s ease;
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
    @keyframes up-appear-in {
    0% {
        transform: translateY(-700px);
    }
    100% {
        transform: translateX(0px);
    }
    }
</style>