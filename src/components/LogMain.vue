<template>
    <div class="logmain">
        <div class="logmain__block">
            <p class="logmain__block__title">Технопроект</p>
            <p class="logmain__block__circums">43 совпадений найдено</p>
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
    background-color: #afc985;
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
    background-color: aqua;
    justify-content:space-between;
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
}
.logmain__block__sortblock__filter__img {
    flex-basis: 50px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
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
    padding-left: 0.35em;
    // padding-right: 60px;
    align-self: center;
    box-sizing: border-box;
    min-width: 0px;
    flex-wrap: nowrap;
    overflow: hidden;
    white-space: nowrap;
}
.logmain__block__sortblock__sorting {
    flex-basis: 309px;
    height: 50px;
    position: relative;
    display: flex;
    // background-color: blueviolet;
    background-color: #010027;
    border-radius: 20px;
}
.logmain__block__sortblock__sorting__img {
    width: 50px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
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
    // margin-left: auto;
    // margin-right: 10px;
}
</style>