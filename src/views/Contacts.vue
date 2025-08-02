<template>
    <div class="contacts">
        <div class="contacts__block">
            <div class="contacts__block__title">Контакты</div>
            <div class="contacts__block__list">
                <div class="contacts__block__list__item">
                    FJHF
                </div>
                <div class="contacts__block__list__item">
                    POKIK
                </div>
                <div class="contacts__block__list__item">
                    aslkamdm
                </div>
                <div class="contacts__block__list__item">
                    qwpoqwij
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
}
</script>

<style lang="scss" scoped>
.contacts {
    width: 100%;
    height: 80vh;
    top: 11.5em;
    position: relative;
    display: flex;
    flex-direction: column;
    //   background-color: blue;
    justify-content: flex-start;
    align-items: center;
    background-color: #01002F;
    z-index: 300;
}
.contacts__block {
    max-width: 1400px;
    height: auto;
    // background-color: #afc985;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 300;
    background-color: aquamarine;
    align-items: center;
}
.contacts__block__title {
    width: auto;
    height: auto;
    position: relative;
    display: flex;
    color: #FFFFFF;
    font-size: 5.4em;
    font-weight: bold;
    font-family: 'Outfit', sans-serif;
    padding-left: 0.35em;
    padding-top: 0.35em;
    box-sizing: border-box;
    right: 5%;
    //   position: absolute;
}
.contacts__block__list {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    background-color: red;
    margin-top: 2em;
    gap: 5px;
}
.contacts__block__list__item {
  flex-basis: 500px;
  height: 154px;
  background-color: #d2d3e6;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;
  overflow: hidden;
  flex-grow: 1;
}
</style>