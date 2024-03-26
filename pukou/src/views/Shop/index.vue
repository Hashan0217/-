<template>
    <div class="shop-container">
        <div class="shop-container-tabs">
            <el-tabs
                v-model="activeName"
                @tab-click="handleClick"
            >
                <el-tab-pane
                    :label="item.name"
                    :name="item.id"
                    v-for="(item, index) in category"
                    :key="index"
                >
                    <div class="shop-container-list">
                        <div
                            class="shop-container-list-item"
                            v-for="(item, index) in showShopList"
                            :key="index"
                            @click="jumpShopDetail(item)"
                        >
                            <ShopCard :item="item"></ShopCard>
                        </div>
                    </div>
                </el-tab-pane>

            </el-tabs>
        </div>
    </div>
</template>

<script>
import ShopCard from '@/components/Card/ShopCard.vue';
import { getShopCategory, getShopList } from '@/api/shop';
import { mapMutations } from 'vuex'
export default {
    components: {
        ShopCard
    },
    data() {
        return {
            activeName: '',
            category: [],
            shopList: [],
            showShopList: []
        };
    },
    mounted() {
        this.getCategroy()

    },
    methods: {
        ...mapMutations(['upShopList']),
        jumpShopDetail(item) {
            let routeData = this.$router.push({
                path: '/detailShop?id=' + item.id,
            });

        },
        async getShopList(data) {
            // 获取商品列表
            const parmas = { num: data.num, size: data.size }
            const res = await getShopList(parmas)
            if (res.code == 200) {
                console.log(res);
                this.shopList = res.data
                this.upShopList(res.data)
                this.handleClick({ name: 1 })
            }
        },
        handleClick(tab, event) {
            console.log(tab.name);
            if (tab.name == 1) {
                this.showShopList = this.shopList
                return

            }
            // 根据tab.name,整理对应数据
            this.showShopList = this.shopList.filter(item => item.categoryId == tab.name)
        },
        async getCategroy() {
            const res = await getShopCategory()
            if (res.code == 200) {
                res.data.unshift({ id: '1', name: '全部' })
                this.category = res.data
                this.activeName = res.data[0].id
                this.getShopList({ num: 1, size: 10 })
            }
        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.shop-container {
    .shop-container-tabs {
        padding: 20px;
        /* background: white; */

        .el-tabs__header {
            border: none;

            .el-tabs__nav {
                .el-tabs__item {
                    color: #333;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
        }
    }

    .shop-container-list {
        display: flex;
        flex-wrap: wrap;

        .shop-container-list-item {
            width: 20%;
            padding: 20px;
        }
    }

    .shop-container-tabs {
        background: rgb(238, 235, 235);

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