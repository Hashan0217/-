<template>
    <div class="taber-container">
        <div class="title">
            <h1 style=" margin: 0;padding: 0;  color: #e7aa03c5;">{{ pageTitle }}</h1>
        </div>
        <div class="avatar">
            <div
                @click="jumpUserPage"
                v-if="userInfo"
            >
                <el-avatar
                    :src="userInfo.avatar || 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'"
                ></el-avatar>
            </div>

            <div
                class="login"
                v-else
                style="width: 40px;height: 40px;border-radius: 50%; color: #ecbd3c; background-color: black; text-align: center; line-height: 40px;"
                @click="login"
            >登录</div>

        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            userInfo: {}
        }
    },
    mounted() {
        console.log('taber')
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        this.userInfo = userInfo;
    },
    computed: {
        ...mapGetters([
            'pageTitle'
        ])
    },
    methods: {
        login() {
            let routeData = this.$router.push({
                path: '/login'
            });

        },
        jumpUserPage() {
            console.log(222222);
            this.$router.push('/user')
        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.taber-container {
    padding: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #8d8a8ac5;
    align-items: center;
    background: #ffffff;

    .title {
        margin-left: 85px;
        color: #e7aa03c5;
    }

    .avatar {
        margin-right: 35px;
    }

}
</style>