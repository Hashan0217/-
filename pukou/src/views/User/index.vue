
<template>
    <div class="user-container">
        <div class="PersonTop">
            <div class="PersonTop_img">
                <img :src="avatar" />
            </div>
            <div class="PersonTop_text">
                <div class="user_text">
                    <div class="user_name">
                        <span> {{ userInfo.userName }} </span>
                    </div>
                    <div class="user_anniu">
                        <el-button
                            class="el-icon-edit"
                            type="primary"
                            size="medium"
                            plain
                            @click="edit"
                        >编辑</el-button>
                    </div>
                </div>
                <div class="user_num">

                </div>
            </div>
        </div>
        <div class="person_taber">
            <el-tabs
                v-model="activeName"
                @tab-click="handleClick"
            >
                <el-tab-pane
                    :label="item.label"
                    :name="item.name"
                    v-for="(item, index) in tabsList"
                    :key="index"
                >

                    <MyRelease
                        :list="article"
                        v-if="activeName == 'release'"
                    ></MyRelease>

                    <MyShop
                        :list="shopList"
                        style=" "
                        v-if="activeName == 'commodity'"
                    ></MyShop>

                    <BuyGoods
                        :list="calculation"
                        v-if="activeName == 'calculate'"
                    ></BuyGoods>
                </el-tab-pane>

            </el-tabs>
        </div>
        <div style="height:10px;width: 100%; background-color: #f5f5f5; "></div>

        <PersonalDia
            ref="dia"
            @upData="handleUpData"
        />
    </div>
</template>

<script>
import PersonalDia from "./components/PersonalDia.vue";
import MyRelease from './components/MyRelease.vue';
import MyShop from './components/MyShop.vue';
import BuyGoods from './components/BuyGoods.vue';

import { getMyGoods, getMyArticle, getMyCalculation } from '@/api/user'
export default {
    components: { PersonalDia, MyRelease, MyShop, BuyGoods },
    data() {
        return {
            avatar: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
            userInfo: {},
            activeName: 'release',
            tabsList: [
                { name: 'release', label: '我的发布' },
                { name: 'calculate', label: '我的测算' },
                { name: 'commodity', label: '购买的商品' },

                // { name: 'focuson', label: '我的关注' },
            ],
            article: [],
            shopList: [],
            calculation: []
        };
    },
    mounted() {
        this.load();
    },
    watch: {

    },
    methods: {

        handleClick(tab, event) {
            this.activeName = tab.name;
            console.log(tab, event);
        },
        async load() {
            const userInfo = localStorage.getItem('user-info')
            this.userInfo = JSON.parse(userInfo)
            if (this.userInfo.avatar) {
                this.avatar = this.userInfo.avatar
            }

            //获取我的商品
            const shopRes = await getMyGoods()

            // console.log(shopRes);
            if (shopRes.code === 200) {
                this.shopList = shopRes.data

            }
            // 获取我的文章
            const articleRes = await getMyArticle()
            if (articleRes.code === 200) {
                this.article = articleRes.data
            }

            //获取我测算
            const calculationRes = await getMyCalculation()
            if (calculationRes.code === 200) {
                calculationRes.data.forEach(item => {
                    item.meansText.split('\n').map(item => {
                        return `<p>${item}</p>`
                    }).join('')

                    // 截取 第五个p元素为止
                    item.meansTextDes = item.meansText.split('\n').map(item => {
                        return `<p>${item}</p>`
                    }).join('').split('</p>').slice(0, 5).join('</p>') + '</p>'
                });

                this.calculation = calculationRes.data

            }


            console.log(this.shopList);

        },
        edit() {
            this.$refs.dia.open();
        },
        handleUpData() {
            console.log('更新');
            this.load()
        }
    },
};
</script>

<style scoped>
.user-container {
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    margin: 0 auto;

}

.PersonTop {
    width: 1000px;
    height: 140px;
    padding-top: 20px;
    background-color: white;
    margin: 40px auto 0;
    display: flex;
    border-radius: 5px;
}

.PersonTop_img {
    width: 120px;
    height: 120px;
    background-color: #8c939d;
    margin-right: 24px;
    margin-left: 20px;
    overflow: hidden;
    border-radius: 20px;
}

.PersonTop_img img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.PersonTop_text {
    height: 120px;
    width: 880px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.user_text {
    width: 60%;
    /* height: 100%; */
    line-height: 30px;
    display: flex;
    align-items: center;
}

.user_num {
    width: 40%;
    /* height: 50px; */
    height: 100%;
    display: flex;
    align-items: center;
    /* line-height: 50px; */
}

.user_num>div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-right: 1px dotted #999;
    box-sizing: border-box;
    width: 80px;
    height: 40px;
}

.user_name {
    font-weight: bold;
    font-size: 24px;
    margin-right: 20px;
    /* justify-content: center; */

}

.user-v {
    margin-bottom: -5px;
}

.user-v-img {
    width: 15px;
    height: 15px;
}

.user-v-font {
    font-size: 15px;
    color: #00c3ff;
}

.user_qianming {
    font-size: 14px;
    color: #999;
}



.num_text {
    color: #999;
}

.num_number {
    font-size: 20px;
    color: #333;
}

.el-menu-item>span {
    font-size: 16px;
    color: #999;
}

/*下面部分样式*/
.person_taber {
    width: 100%;
    /* height: 100%; */
    margin: 0 auto 100px;
    border-radius: 16px;
    padding: 0 10px 0;
    background-color: #f5f5f5;

}



/*ui样式*/
.el-button {
    width: 84px;
}
</style>
