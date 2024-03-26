<template>
    <div class="buy-goods-container">
        <div
            class="card"
            v-for="(item, index) in list"
            :key="index"
        >
            <OrderCard :item="item"></OrderCard>
        </div>


    </div>
</template>

<script>
import OrderCard from "@/components/Card/OrderCard.vue";
export default {
    components: { OrderCard },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    computed: {

    }

}
</script>

<style
    lang="scss"
    scoped
></style>