<template>
    <div class="singlemain">
        <div class="singlemain__block">
            <div class="singlemain__block__imageblock">
                <img src="../assets/catalog/item1.png" alt="" class="singlemain__block__imageblock__img">
            </div>
            <div class="singlemain__block__info">
                <div class="singlemain__block__info__status">
                    <p class="singlemain__block__info__status__text">В наличии</p>
                </div>
                <p class="singlemain__block__info__title">BENZA 14-220-25 wefouiwahefiuowhefiuwhef</p>
                <div class="singlemain__block__info__line--gray"></div>
                <p class="singlemain__block__info__price--label">Цена</p>
                <p class="singlemain__block__info__price--content">₸ 2 999 900</p>
                <p class="singlemain__block__info__description--label">Описание</p>
                <p class="singlemain__block__info__description--content">Мобильная ТРК Benza предназначена для измерения объема и перекачки масла.</p>
                <div class="singlemain__block__info__button">
                    <img src="../assets/catalog/cart2.png" alt="" class="singlemain__block__info__button__cart-img">
                    <p class="singlemain__block__info__button__text">В корзину</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleMain',
}

</script>

<style lang="scss" scoped>
.singlemain {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    background-color: #01002F;
    // background-color: #0400d4;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
.singlemain__block {
    // flex-basis: 1520px;
    max-width: 1520px;
    // min-width: 1400px;
    max-height: auto;
    // background-color: #afc985;
    background-color: #F0EDE5;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 30px;
    z-index: 300;
    flex-shrink: 8;
    flex-grow: 0;
    flex-wrap: wrap;
}
.singlemain__block__imageblock {
        // width: 248px;
    flex-basis: 750px;
    // height: 607px;;
    max-height: 607px;;
    min-height: 440px;
    position: relative;
    display: flex;
    margin-top: 18px;
    // margin-left: 32px;
    margin-bottom: 18px;
    background-image: linear-gradient(to left, rgba($color: #8B0100, $alpha: 0.15) 12%,rgba($color: #400015, $alpha: 0.6) 67%, #010027);
    border-radius: 20px;
}
.singlemain__block__imageblock__img {
    object-fit: contain;
}
.singlemain__block__info {
    flex-basis: 700px;
    // min-width: 650px;
    height: 607px;
    position: relative;
    display: flex;
    flex-direction: column;
    // background-color: pink;
    box-sizing: border-box;
    align-items: flex-start;
}
.singlemain__block__info__status {
    width: 208px;
    height: 52px;
    position: relative;
    display: flex;
    background-color: #006900;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.singlemain__block__info__status__text {
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
    // padding-left: 5px;
    box-sizing: border-box;
}
.singlemain__block__info__title {
    width: auto;
    height: 160px;
    position: relative;
    display: flex;
    color: #312F2C;
    font-size: 3em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    // margin-left: 15px;
    margin-top: 10px;
    box-sizing: border-box;
}
.singlemain__block__info__line--gray {
    width: 700px;
    height: 6px;
    position: relative;
    display: flex;
    background-color: #C4C4C4;
    border-radius: 10px;
}
.singlemain__block__info__price--label {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #838383;
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 30px;
    margin-top: 8px;
    // margin-left: 15px;
    // align-self: center;
    // padding-bottom: 10px;
    // padding-left: 5px;
    box-sizing: border-box;
}
.singlemain__block__info__price--content {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #865103;
    font-size: 1.5em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 30px;
    margin-top: 4px;
    // margin-left: 15px;
    // align-self: center;
    // padding-bottom: 10px;
    // padding-left: 5px;
    box-sizing: border-box;
}
.singlemain__block__info__description--label {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #838383;
    font-size: 1.5em;
    font-weight: 600;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 30px;
    margin-top: 8px;
    // margin-left: 15px;
    // align-self: center;
    // padding-bottom: 10px;
    // padding-left: 5px;
    box-sizing: border-box;
}
.singlemain__block__info__description--content {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #312F2C;
    font-size: 1.25em;
    font-weight: 500;
    font-family: 'Outfit', sans-serif;
    padding: 0;
    margin-left: 30px;
    margin-top: 4px;
    // margin-left: 15px;
    // align-self: center;
    // padding-bottom: 10px;
    // padding-left: 5px;
    box-sizing: border-box;
}
.singlemain__block__info__button {
        // width: 142px;
    // flex-basis: 371px;
    width: 371px;
    height: 54px;
    position: relative;
    display: flex;
    flex-direction: row;
    background-color: #030069;
    margin-right: auto;
    // bottom: 10px;
    border-radius: 24px;
    border: 3px solid #ffffff;
    // flex-grow: 0.3;
    justify-content: center;
    gap: 10px;
    margin-top: auto;
    margin-left: 30px;
    padding-right: 8px;
    box-sizing: border-box;
    // margin-right: auto;
    // align-self: flex-end;
    transition: all 0.3s ease;
}
.singlemain__block__info__button__cart-img {
    width: 35px;
    height: auto;
    position: relative;
    display: flex;
    object-fit: contain;
    margin-left: 10px;
    align-self: center;
}
.singlemain__block__info__button__text {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #ffffff;
    font-size: 1.4em;
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