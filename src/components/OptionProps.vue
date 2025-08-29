<template>
    <div class="optionprops">
        <p class="optionprops__title">Комплектация</p>

        <div class="optionprops__text-block">
            <div class="optionprops__text-block__gray-line"></div>
            <p class="optionprops__text-block__text">Электронасос 220 В</p>
        </div>

        <div class="optionprops__text-block">
            <div class="optionprops__text-block__gray-line"></div>
            <p class="optionprops__text-block__text">Счетчик топлива DGT410</p>
        </div>

        <div class="optionprops__text-block">
            <div class="optionprops__text-block__gray-line"></div>
            <p class="optionprops__text-block__text">Топливораздаточный кран ручной URPP80 19</p>
        </div>

        <div class="optionprops__text-block">
            <div class="optionprops__text-block__gray-line"></div>
            <p class="optionprops__text-block__text">Раздаточный шланг 4м</p>
        </div>


        <div class="optionprops__text-block">
            <div class="optionprops__text-block__gray-line"></div>
            <p class="optionprops__text-block__text">Монтажная панель</p>
        </div>


        <p class="optionprops__title">Характеристики</p>


        <div class="optionprops__text-block--direct">
            <div class="optionprops__text-block--lim">
                <p class="optionprops__text-block__text">Вид перекачиваемой жидкости</p>
                <div class="optionprops__text-block__underline"></div>
                
            </div>

            <p class="optionprops__text-block__text--content">Масло</p>
        </div>

        <div class="optionprops__text-block--direct">

            <div class="optionprops__text-block--lim">
                <p class="optionprops__text-block__text">Электропитание</p>
                <div class="optionprops__text-block__underline"></div>
                <!-- <p class="optionprops__text-block__text">220В</p> -->
            </div>

            <p class="optionprops__text-block__text--content">220В</p>
        </div>


        <div class="optionprops__text-block--direct">

            <div class="optionprops__text-block--lim">
                <p class="optionprops__text-block__text">Производительность</p>
                <div class="optionprops__text-block__underline"></div>
                <!-- <p class="optionprops__text-block__text">220В</p> -->
            </div>

            <p class="optionprops__text-block__text--content">25 литров в минуту</p>
        </div>


        <div class="optionprops__text-block--direct">

            <div class="optionprops__text-block--lim">
                <p class="optionprops__text-block__text">Место установки</p>
                <div class="optionprops__text-block__underline"></div>
                <!-- <p class="optionprops__text-block__text">220В</p> -->
            </div>

            <p class="optionprops__text-block__text--content">Любое</p>
        </div>d


    </div>
</template>

<script>
export default {
    name: 'OptionProps'
}

</script>

<style lang="scss" scoped>
.optionprops {
    // flex-basis: 1520px;
    max-width: 1520px;
    // min-width: 1400px;
    max-height: auto;
    // background-color: #afc985;
    background-color: #F0EDE5;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    border-radius: 32px;
    z-index: 300;
    flex-shrink: 8;
    flex-grow: 0;
    flex-wrap: wrap;
}
.optionprops__title {
    width: auto;
    // height: 128px;
    position: relative;
    display: flex;
    color: #312F2C;
    font-size: 3em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.03em;
    padding: 0;
    // margin-left: 15px;
    margin-top: 10px;
    margin-left: 45px;
    box-sizing: border-box;
}
.optionprops__text-block {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: 45px;
    align-items: center;
    justify-content: flex-start;

}
.optionprops__text-block--direct {
    // flex-basis: 600px;
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    // margin-left: 45px;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
}
.optionprops__text-block--lim {
    min-width: 640px;
    // flex-basis: 600px;
    // max-width: 800px;
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: 45px;
    align-items: center;
    justify-content: flex-start;

    /* Prevent shrinking and allow horizontal scrolling */
    // overflow-x: auto;
    flex-grow: 1;
    white-space: nowrap;
    flex-wrap: nowrap;
    // margin-right: 80px;
    // padding-right: 80px;
    box-sizing: border-box;
}
.optionprops__text-block__gray-line {
    width: 25px;
    height: 4px;
    position: relative;
    display: flex;
    background-color: #c4c4c4;
}
.optionprops__text-block__text {
    width: auto;
    // height: 128px;
    position: relative;
    display: flex;
    color: #333333;
    font-size: 1.8em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.04em;
    padding: 0;
    // margin-left: 15px;
    margin-bottom: 4px;
    margin-left: 5px;
    box-sizing: border-box;
    flex-shrink: 0; /* don’t let the text shrink */
    // padding: 0;
        // min-width: 0px;
    // flex-wrap: nowrap;
    // overflow: hidden;
    // white-space: nowrap;
    // user-select: none;
}
.optionprops__text-block__text--content {
    width: auto;
    // height: 128px;
    position: relative;
    display: flex;
    color: #312F2C;
    font-size: 1.8em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    letter-spacing: -0.04em;
    padding: 0;
    // margin-left: 15px;
    margin-bottom: 4px;
    margin-left: 5px;
    box-sizing: border-box;
    flex-shrink: 0; /* don’t let the text shrink */
}
.optionprops__text-block__underline {
    flex-basis: 100px;
    width: auto;
    // max-width: 400px;
    height: 4px;
    position: relative;
    display: flex;
    background-color: #c4c4c4;
    flex-grow: 1;
    flex-shrink: 0;
    align-self: flex-end;
    margin-bottom: 12px;
    margin-left: 6px;
    margin-right: 2px;
}
</style>