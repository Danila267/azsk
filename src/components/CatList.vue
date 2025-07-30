<template>
    <div class="catlist">
        <template v-for="category in categories" :key="category.id">
            <CatItem :category="category"/>
        </template>
        <!-- <CatItem />
        <CatItem />
        <CatItem /> 
        <CatItem />

        <CatItem />
        <CatItem />
        <CatItem />
        <CatItem />

        <CatItem />
        <CatItem />
        <CatItem />
        <CatItem /> -->
    </div>
</template>

<script>
import CatItem from './CatItem.vue';
import { ref } from 'vue'
import { doc, getDocs, query, collection } from "firebase/firestore"
import db from '../firebase.js'

export default {
    name: 'CatList',
    components: { CatItem },
    data() {
        return {
            categories: [],
        }
    },
    created(){
        this.getCategories()
    },
    methods: {
        async getCategories() {
            // query to get all docs in 'countries' collection
            const querySnap = await getDocs(query(collection(db, 'Categories')));

            // add each doc to 'countries' array
            querySnap.forEach((doc) => {
            this.categories.push(doc.data());
            console.log(doc.data());
            })

        }
    }
}
</script>

<style lang="scss" scoped>
.catlist {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    position: relative;
    // background-color: red;
    margin-top: 2em;
    gap: 80px;
}
</style>