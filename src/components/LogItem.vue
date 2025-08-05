<template>
    <div class="logitem">
        <div class="logitem__imageblock">
            <img src="../assets/catalog/item1.png" alt="" class="logitem__imageblock__img">
        </div>
        <p class="logitem__title">BENZA 14-24-10</p>
        <p class="logitem__pricetag">₸ 2 999 900</p>
        <p class="logitem__description">Мобильная ТРК Benza предназначена для измерения объема и перекачки масла.</p>
        <div class="logitem__bottomblock">
            <p class="logitem__bottomblock__amount">173 шт.</p>
            <div class="logitem__bottomblock__button">
                <img src="../assets/catalog/cart2.png" alt="" class="logitem__bottomblock__button__cart-img">
                <p class="logitem__bottomblock__button__text">В корзину</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LogItem',
}

</script>

<style lang="scss" scoped>
.logitem {
    width: 280px;
    height: 385px;
    background-color: #F0EDE5;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    transition: all 0.3s ease;
}
.logitem:hover {
    cursor: pointer;
    transform: scale(1.03);
    background-color: #dfddd5;
    transition: all 0.3s ease;
}
.logitem__imageblock {
    width: 248px;
    height: 215px;
    position: relative;
    display: flex;
    margin-top: 10px;
    margin-left: 15px;
    background-image: linear-gradient(to left, rgba($color: #8B0100, $alpha: 0.15) 12%,rgba($color: #400015, $alpha: 0.6) 67%, #010027);
    border-radius: 20px;
}
.logitem__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #312F2C;
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 15px;
    margin-top: 10px;
    box-sizing: border-box;
}
.logitem__pricetag {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #865103;
    font-size: 1em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 20px;
    // margin-top: 0px;
    box-sizing: border-box;
}
.logitem__description {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #312F2C;
    font-size: 0.85em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 15px;
    // margin-top: 0px;
    box-sizing: border-box;
}
.logitem__bottomblock {
    width: 88%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    align-self: center;
    // margin-top: auto;
    // margin-bottom: 20px;
    justify-content:space-between;
}
.logitem__bottomblock__amount {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #888888;
    font-size: 0.7em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    // margin-left: 15px;
    align-self: center;
    padding-bottom: 10px;
    padding-left: 5px;
    box-sizing: border-box;
}
.logitem__bottomblock__button {
    width: 142px;
    height: 40px;
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: #030069;
    margin-left: auto;
    bottom: 10px;
    border-radius: 20px;
    border: 3px solid #ffffff;
    transition: all 0.3s ease;
}
.logitem__bottomblock__button:hover {
    cursor: pointer;
    filter: brightness(80%);
    transform: translateY(-3px);
    transition: all 0.2s ease;
}
.logitem__bottomblock__button__cart-img {
    width: 30px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    margin-left: 10px;
    align-self: center;
    // box-sizing: border-box;
}
.logitem__bottomblock__button__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #ffffff;
    font-size: 1em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    // margin-left: 15px;
    align-self: center;
    // padding-bottom: 10px;
    padding-left: 5px;
    box-sizing: border-box;
}
</style>