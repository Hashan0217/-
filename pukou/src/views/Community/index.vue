<template>
    <div class="community-container">
        <div class="community-contaier-tabs">
            <el-tabs
                v-model="activeName"
                @tab-click="handleClick"
            >
                <el-tab-pane
                    label="社区文章"
                    name="first"
                >
                    <div class="communtiy-container-list">
                        <div
                            class="communtiy-container-list-item"
                            v-for="(item, index) in list"
                            :key="index"
                            @click="jumpBlogDetail(item)"
                        >
                            <BlogCard :item="item"></BlogCard>
                        </div>
                    </div>
                    <div style="width: 100%;height: 150px;"></div>
                </el-tab-pane>

            </el-tabs>
        </div>


    </div>
</template>

<script>
import BlogCard from '@/components/Card/BlogCard.vue';
import { getCommunityList } from '@/api/community.js';
export default {
    components: {
        BlogCard
    },
    data() {
        return {
            activeName: 'first',
            list: [],
            total: 0
        };
    },
    mounted() {
        this.getData();
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        jumpBlogDetail(item) {
            let routeData = this.$router.push({ path: '/blogDetail', query: { id: item.id } });
        },
        getData() {
            console.log();
            getCommunityList({ num: 1, size: 10 }).then(res => {
                console.log(res);
                if (res.code === 200) {
                    this.list = res.data;
                    this.total = res.total;
                }
            })

        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.community-container {

    .community-contaier-tabs {
        background: white;
        width: 95%;
        border-radius: 10px;
        padding: 0 15px 10px;
        margin: 10px auto 0;
    }



}
</style>
<style>
.el-tabs__item.is-active,
.el-tabs__item:hover {
    color: #ecbd3c;

}

.el-tabs__active-bar {
    background: #ecbd3c;
}
</style>