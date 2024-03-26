import Home from "../views/Home/index.vue";
import User from "../views/User/index.vue";
import Main from "../views/Main/index.vue";
import Login from "../views/Login/index.vue";
import Release from "../views/Release/index.vue";
import Community from "../views/Community/index.vue";
import BlogDetail from "../views/Community/BlogDetail.vue";
import Shop from "../views/Shop/index.vue";
import DetailShop from "../views/Shop/DetailShop.vue";
import DivinationCenter from "../views/DivinationCenter/index.vue";
import datile from "../views/DivinationCenter/datile.vue";
export default [
    {
        path: "/login",
        component: Login,
        meta: {
            title: "登录",
        },
    },
    {
        path: "/",
        component: Main,
        children: [
            {
                path: "/",
                component: Home,
                meta: {
                    title: "首页",
                },
            },
            {
                path: "user",
                component: User,
                meta: {
                    title: "用户管理",
                },
            },
            {
                path: "release",
                component: Release,
                meta: {
                    title: "发布内容",
                },
            },
            {
                path: "community",
                component: Community,
                meta: {
                    title: "社区",
                },



            },
            {
                path: "blogDetail",
                component: BlogDetail,
                meta: {
                    title: "博客详情",
                },
            },

            {
                path: "shop",
                component: Shop,
                meta: {
                    title: "商场",
                },
            },

            {
                path: "detailShop",
                component: DetailShop,
                meta: {
                    title: "商品详情",
                },
            },
            {
                path: "divinationCenter",
                component: DivinationCenter,
                meta: {
                    title: "占卜中心",
                },
            },
            {
                path: "datile",
                component: datile,
                meta: {
                    title: "占卜详情",
                },
            },


        ],
    },



]