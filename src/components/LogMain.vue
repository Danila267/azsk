<template>
    <div class="logmain">
        <div class="logmain__block">
            <p class="logmain__block__title">Технопроект</p>
            <p class="logmain__block__circums">43 совпадений найдено</p>
            <div class="logmain__block__sortblock">
                <div class="logmain__block__sortblock__filter">

                </div>
                <div class="logmain__block__sortblock__sorting">

                </div>
                <div class="logmain__block__sortblock__catcheck">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogMain'
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
    flex-basis: 225px;
    height: 50px;
    position: relative;
    display: flex;
    background-color: red;
}
.logmain__block__sortblock__sorting {
    flex-basis: 309px;
    height: 50px;
    position: relative;
    display: flex;
    background-color: blueviolet;
}
.logmain__block__sortblock__catcheck {
    flex-basis: 185px;
    height: 50px;
    position: relative;
    display: flex;
    background-color: green;
}
</style>