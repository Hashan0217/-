<template>
    <div class="order-card-container">
        <div
            class="card"
            style=" width:80%; margin: 0 auto; margin-top: 20px;"
            @click="goDetail(item)"
        >
            <div
                class="card-title"
                style="font-size: 24px; font-weight: bolder;"
            >卜卦测算</div>
            <div
                v-html="item.meansTextDes"
                style="padding:20px; width: 80%;"
            ></div>

        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    props: {
        item: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        ...mapMutations([
            'upPuguaDateile', "upBuGua"
        ]),
        goDetail(item) {

            this.upPuguaDateile(item);
            const code = item.benGuaNum.split('')
            this.upBuGua(code);
            this.$router.push({
                path: "/datile",

            });

        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.order-card-container {
    width: 100%;
    height: 100%;

    .card {
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

        .card-title {
            font-size: 16px;
            color: #333;
            padding: 10px;
            border-bottom: 1px solid #f5f5f5;
        }

        .card-creta-data {
            font-size: 14px;
            color: #666;
            padding: 10px;
        }
    }
}
</style>