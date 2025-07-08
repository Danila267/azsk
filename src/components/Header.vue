<template>
    <nav class="header">
        <div class="header__upper-part">
            <div class="header__upper-part--first">
                <div class="header__upper-part__logo-block">
                    <div class="header__upper-part__logo-block--circle"></div>
                </div>
            </div>
            <div class="header__upper-part--second">
                <p class="header__upper-part--second__column">МАГАЗИН</p>
                <p class="header__upper-part--second__column">О НАС</p>
                <p class="header__upper-part--second__column">КОНТАКТЫ</p>
                <p class="header__upper-part--second__column">БЛОГ</p>
                <p class="header__upper-part--second__column">КОРЗИНА</p>
            </div>
            <!-- <div class="header__upper-part--third">

            </div> -->
        </div>
        <div class="header__lower-part">
            <div class="header__lower-part--first">

            </div>
            <div class="header__lower-part--second">
                <div class="header__lower-part--second__search">

                </div>
            </div>
            <div class="header__lower-part--third">
                <img src="../assets/facebook8.png" alt="." class="header__lower-part--third__social">
                <img src="../assets/whatsapp6.png" alt="." class="header__lower-part--third__social">
                <img src="../assets/vk2.png" alt="." class="header__lower-part--third__social">
                <img src="../assets/instagram5.png" alt="." class="header__lower-part--third__social">

            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>
    .header {
        position: absolute;
        width: 100%;
        margin: 0;
        padding: 0;
        // display: flex;
        height: 11.5em;
        background-color: red;
    }
    .header__upper-part {
        width: 100%;
        display: flex;
        position: absolute;
        justify-content: flex-start;
        top: 0;
        background-color: blue;
        height: 48%;
    }
    .header__upper-part--first {
        // min-width: 448.5px;
        min-width: 22.5em;
        max-width: 22.5em;
        // width: 448.5px;
        background-color: black;
        position: relative;
        flex-shrink: 0;
        flex-grow: 0.1;
    }
    .header__upper-part--second {
        background-color: white;
        // flex-grow: 0.6;
        flex-shrink: 3;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        min-width: 0;
    }
    .header__upper-part--third {
        background-color: magenta;
        // flex-grow: 0.2;
        flex-shrink: 6;
    }
    .header__upper-part__logo-block {
        width: 75%;
        flex-shrink: 0;
        position: absolute;
        flex-grow: 1;
        height: 162%;
        background-color: purple;
        position: relative;
        z-index: 500;
    }
    .header__upper-part__logo-block--circle {
        width: 57%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        background-color: aqua;
        position: absolute;
        right: -28.5%;
        border-radius: 100%;
        z-index: 300;
    }
    .header__upper-part--second__column {
        width: auto;
        height: 2em;
        font-size: 1.5em;
        position: relative;
        justify-content: center;
        align-items: center;
        top: 10%;
        min-width: 0;
    }
    .header__lower-part {
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 52%;
        background-color: green;
        justify-content: flex-start;
        align-items: center;
    }
    .header__lower-part--first {
        width: 22.5em;
        // min-width: 22.5em;
        height: 100%;
        display: flex;
        position: relative;
        // left: 50%;
        justify-self: center;
        justify-content: center;
        align-items: center;
        background-color: black;
        flex-shrink: 0;
    }
    .header__lower-part--second {
        // max-width: 70%;
        min-width: 0;
        // min-width: 22.5em;
        height: 100%;
        display: flex;
        position: relative;
        // left: 50%;
        justify-self: center;
        justify-content: center;
        align-items: center;
        background-color: orange;
        flex-shrink: 8;
    }
    .header__lower-part--second__search {
        width: 582px;
        height: 73.3px;
        display: flex;
        position: relative;
        justify-self: center;
        background-color: blue;
        border-radius: 80px;
        flex-shrink: 8;
    }
    .header__lower-part--third {
        width: 25em;
        // min-width: 22.5em;
        height: 100%;
        display: flex;
        position: relative;
        // left: 50%;
        justify-self: center;
        justify-content: center;
        align-items: center;
        background-color: pink;
        flex-grow: 3;
        flex-shrink: 0;
    }
    .header__lower-part--third__social {
        // width: 4em;
        height: 4em;
        object-fit:contain;
    }

</style>