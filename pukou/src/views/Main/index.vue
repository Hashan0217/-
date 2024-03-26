<template>
    <!--主页布局-->
    <div class="layout-container">
        <MainLayout>
            <template v-slot:header>
                <Taber></Taber>
            </template>

            <template v-slot:main>
                <router-view></router-view>
            </template>

            <template v-slot:aside>

                <NavMenu></NavMenu>

            </template>
        </MainLayout>
    </div>
</template>

<script>
import MainLayout from '@/components/Layout/MainLayout.vue'
import Taber from '@/components/Taber/Taber.vue'
import NavMenu from '@/components/NavMenu/NavMenu.vue'
export default {
    name: 'App',
    components: {
        MainLayout,
        Taber,
        NavMenu
    }
}
</script>

<style lang="less">
body {
    margin: 0;
    padding: 0;
    overflow: hidden;
    /* 隐藏滚动条 */
}

.layout-container {
    background-color: #dfdfdf69;
    padding: 0;
    overflow: hidden;
    /* 隐藏滚动条 */
}
</style>