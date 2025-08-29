<template>
    <div class="options">
        <div class="options__button-list">

            <div class="options__button-list__button">
                <div class="options__button-list__button__text">Характеристики</div>
            </div>

            <div class="options__button-list__button">
                <div class="options__button-list__button__text">Запчасти</div>
            </div>

            <div class="options__button-list__button">
                <div class="options__button-list__button__text">Вопросы</div>
            </div>

        </div>

        <div class="options__gray-line"></div>


        <OptionProps />
    </div>
</template>

<script>
import OptionProps from './OptionProps.vue';

export default {
    name: 'SingleOptions',
    components: { OptionProps, }
}

</script>

<style lang="scss" scoped>
.options {
    width: 100%;
    height: auto;
    // top: 11.5em;
    position: relative;
    display: flex;
    flex-direction: column;
      background-color: blue;
    z-index: 300;
    align-items: center;
}
.options__button-list {
    max-width: 1505px;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    background-color: aqua;
    // background-color: #01002F;
    justify-content: flex-start;
    margin-top: 10px;
    margin-left: 15px;
    gap: 10px;
}
.options__button-list__button {
    max-width: 330px;
    height: 72px;
    position: relative;
    display: flex;
    background-color: violet;
    border: 3px solid #ffffff;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
    box-sizing: border-box;
}
.options__button-list__button__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #ffffff;
    font-size: 1.8em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    // margin-left: 15px;
    align-self: center;
    // padding-bottom: 10px;
    padding-left: 5px;
    box-sizing: border-box;
}


.options__gray-line {
    max-width: 1520px;
    height: 5px;
    position: relative;
    display: flex;
    background-color: #c4c4c4;
    margin-top: 24px;
    margin-bottom: 24px;
    border-radius: 5px;
}


</style>