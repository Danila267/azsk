<template>
    <link href='https://fonts.googleapis.com/css?family=Outfit' rel='stylesheet'>
    <nav class="header">
        <div class="header__upper-part">
            <div class="header__upper-part--first">
                <div class="header__upper-part__logo-block">
                    <img src="../assets/logo.png" alt="" class="header__upper-part__logo-block__img">
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
                <input placeholder="поиск..." class="header__lower-part--second__search">
                    <!-- <input type="text" class="header__lower-part--second__search__input"> -->
                <!-- </input> -->
            </div>
            <div class="header__lower-part--third">
                <a href="https://facebook.com"><img src="../assets/facebook8.png" alt="." class="header__lower-part--third__social"></a>
                <a href="https://whatsapp.com"><img src="../assets/whatsapp6.png" alt="." class="header__lower-part--third__social"></a>
                <a href="https://vk.ru"><img src="../assets/vk2.png" alt="." class="header__lower-part--third__social"></a>
                <a href="https://instagram.com"><img src="../assets/instagram5.png" alt="." class="header__lower-part--third__social"></a>

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
        position: fixed;
        width: 100%;
        margin: 0;
        padding: 0;
        // display: flex;
        height: 11.5em;
        // background-color: red;
        z-index: 400;
    }
    .header__upper-part {
        width: 100%;
        display: flex;
        position: absolute;
        justify-content: flex-start;
        top: 0;
        // background-color: blue;
        height: 48%;
        z-index: 2000;
    }
    .header__upper-part--first {
        // min-width: 448.5px;
        min-width: 22.5em;
        max-width: 22.5em;
        // width: 448.5px;
        // background-color: black;
        background-color: #FFFFFF;
        position: relative;
        flex-shrink: 0;
        flex-grow: 0.1;
    }
    .header__upper-part--second {
        background-color: #FFFFFF;
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
        // background-color: purple;
        background-color: #FFFFFF;
        position: relative;
        z-index: 500;
    }
    .header__upper-part__logo-block__img {
        width: 100%;
        position: absolute;
        top: 20%;
        z-index: 600;
        left: 10%;
    }
    .header__upper-part__logo-block--circle {
        width: 57%;
        height: 100%;
        flex-shrink: 0;
        flex-grow: 1;
        // background-color: aqua;
        background-color: #FFFFFF;
        position: absolute;
        right: -28.5%;
        border-radius: 100%;
        z-index: 300;
    }
    .header__upper-part--second__column {
        width: auto;
        height: 2em;
        font-size: 1.5em;
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        position: relative;
        justify-content: center;
        align-items: center;
        top: 10%;
        min-width: 0;
        transition: all 0.3s ease;
    }
    .header__upper-part--second__column:hover {
        transform: translateY(-7%);
        transition: all 0.3s ease;
        color: rgb(36, 36, 36);
        cursor: pointer;
    }
    .header__lower-part {
        width: 100%;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 52%;
        // background-color: green;
        justify-content: flex-start;
        align-items: center;
        z-index: 300;
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
        // background-color: black;
        background-color: #01002F;
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
        // background-color: orange;
        background-color: #01002F;
        flex-shrink: 8;
    }
    .header__lower-part--second__search {
        width: 582px;
        height: 73.3px;
        display: flex;
        position: relative;
        justify-self: center;
        background-color: #01002F;
        border-radius: 80px;
        flex-shrink: 8;
        padding: 1em 1em;
        padding-right: 60px;
        box-sizing: border-box;
        font-size: 1.75em;
        border: 5px solid #0306F0;
        color: #FFFFFF;
        opacity: 1;
        font-weight: bold;
        min-width: 0;
        background-image: url('../assets/search.png');
        background-size: 70px;
        background-repeat: no-repeat;
        background-position: 50px 10px;
        background-position-x: right;
        z-index: 1000;
        outline: none;
        // border-color: purple;
    }
    .header__lower-part--second__search::placeholder {
        font-weight: bold;
        color: #FFFFFF;
        opacity: 1;
    }
    // .header__lower-part--second__search__input {

    // }
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
        // background-color: pink;
        background-color: #01002F;
        flex-grow: 3;
        flex-shrink: 0;
    }
    .header__lower-part--third__social {
        // width: 4em;
        height: 3.5em;
        object-fit:contain;
        transition: all 0.3s ease;
    }
    .header__lower-part--third__social:hover {
        transform: translateY(-6px);
        // box-shadow: 5px 10px 20px #94CFD0;
        transition: all 0.3s ease;
        cursor: pointer;
    }

</style>