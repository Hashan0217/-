<template>
    <div class="home-container">

        <div class="calendar">
            <Calendar />
        </div>

        <div class="articleList">
            <Articlecollapse :list="articleList" />
        </div>

        <div style="margin-bottom: 100px;"></div>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar/index.vue'
import Articlecollapse from './components/Articlecollapse.vue'
import { getGuaXiang } from '@/api/home'
export default {
    components: {
        Calendar,
        Articlecollapse
    },

    data() {
        return {
            articleList: [],
            todayFortune: {}
        }
    },
    mounted() {
        this.load()

    },
    methods: {
        async load() {
            const res = await getGuaXiang()
            if (res.code === 200) {
                this.articleList = res.data
            }
        },



    }
}
</script>

<style
    lang="scss"
    scoped
>
.home-container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;

    .articleList {
        /* width: 80%; */

        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
}
</style>