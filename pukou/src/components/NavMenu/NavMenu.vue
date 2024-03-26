<template>
    <el-row>
        <el-col :span="24">
            <el-menu
                default-active="1"
                mode="vertical"
                text-color="#00000"
                active-text-color="#ffd04b"
            >
                <el-menu-item
                    v-for="(item, index) in list"
                    :key="index"
                    @click="handleOpen(item)"
                >
                    <i :class="item.icont"></i>
                    <span slot="title">{{ item.title }}</span>
                </el-menu-item>


            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            list: [
                {
                    title: '首页',
                    path: '/',
                    icont: 'el-icon-menu'
                },
                {
                    title: '个人中心',
                    path: '/user',
                    icont: 'el-icon-menu'
                },
                {
                    title: '占卜中心',
                    path: '/divinationCenter',
                    icont: 'el-icon-menu'
                },
                {
                    title: '扑挂社区',
                    path: '/community',
                    icont: 'el-icon-menu'
                },
                {
                    title: '发布文章',
                    path: '/release',
                    icont: 'el-icon-menu'
                },
                {
                    title: '扑挂商场',
                    path: '/shop',
                    icont: 'el-icon-menu'
                },


            ]
        }
    },
    methods: {
        ...mapMutations([
            'upPageTitle'
        ]),
        handleOpen(item) {
            if (item.title === '首页') {
                this.upPageTitle('扑挂网站')
                this.$router.push(item.path)
                return
            }
            this.upPageTitle(item.title)
            this.$router.push(item.path)
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.menuTitel {
    color: black;
}
</style>