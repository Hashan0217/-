<template>
    <div
        class="my-shop-container"
        style="display: flex;    flex-wrap: wrap;align-items: center;  margin: 0 auto; width: 80%;"
    >
        <div
            v-for="(item, index) in list"
            :key="index"
        >

            <ShopCard
                :item="item"
                style="margin: 10px;"
            />

        </div>


    </div>
</template>

<script>
import ShopCard from '../../../components/Card/ShopCard.vue'

export default {
    props: {
        list: {
            type: Array,
        }
    },
    components: {
        ShopCard
    },
    mounted() {
        // this.getData()
    },
    methods: {
        async getData() {

        }
    }
}
</script>

<style
    lang="scss"
    scoped
></style>