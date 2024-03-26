import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";


Vue.use(VueRouter);

const router = new VueRouter({
    routes
})


router.beforeEach((to, from, next) => {
    console.log("to", to);
    console.log("from", from);
    // Token验证  路由守卫
    if (to.meta.title !== "登录") {
        if (localStorage.getItem("token")) {
            next();
        } else {
            next('/login');
            return;
        }
    } else {

        next();
    }

})


export default router;


