<template>
    <div class="center">
        <h1>登录/ 注册</h1>
        <div class="logon">
            <div :class="overlaylong">
                <div
                    class="overlaylong-Signin"
                    v-if="disfiex == 0"
                >
                    <h2 class="overlaylongH2">登录</h2>
                    <input
                        type="text"
                        placeholder="手机号"
                        maxlength="11"
                        v-model="loginPhone"
                    >
                    <input
                        type="password"
                        placeholder="密码"
                        v-model="loginPassword"
                    >
                    <h3 @click="dialogTableVisible = true">忘记密码?</h3>

                    <button
                        class="inupbutton"
                        @click="login"
                    >登录</button>
                </div>
                <div
                    class="overlaylong-Signup"
                    v-if="disfiex == 1"
                >
                    <h2 class="overlaylongH2">注册账号</h2>
                    <input
                        type="text"
                        placeholder="手机号"
                        maxlength="11"
                        v-model="regestrPhone"
                    >
                    <input
                        type="password"
                        placeholder="密码"
                        v-model="regestrPassword"
                    >
                    <input
                        type="password"
                        placeholder="重新输入密码"
                        v-model="regestrPassword_2"
                    >
                    <button
                        class="inupbutton"
                        @click="regestr"
                    >注册</button>
                </div>

            </div>
            <div :class="overlaytitle">
                <div
                    class="overlaytitle-Signin"
                    v-if="disfiex == 0"
                >
                    <h2 class="overlaytitleH2">欢迎登录</h2>
                    <p class="overlaytitleP">
                        科学算卦，预知人生！
                    </p>
                    <div
                        class="buttongohs"
                        @click="Signin"
                    >注册</div>
                </div>
                <div
                    class="overlaytitle-Signup"
                    v-if="disfiex == 1"
                >
                    <h2 class="overlaytitleH2">欢迎注册扑挂网站</h2>
                    <p class="overlaytitleP">科学算卦，预知人生！</p>
                    <div
                        class="buttongohs"
                        @click="Signup"
                    >登录</div>
                </div>
            </div>
        </div>


        <el-button
            type="text"
            @click="dialogTableVisible = true"
        >打开嵌套表格的 Dialog</el-button>

        <el-dialog
            title="忘记密码"
            :visible.sync="dialogTableVisible"
        >
            <el-form :model="form">
                <el-form-item
                    label="账号"
                    :label-width="formLabelWidth"
                >
                    <el-input
                        v-model="form.name"
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="旧密码"
                    :label-width="formLabelWidth"
                >
                    <el-input
                        v-model="form.oldPassword"
                        show-password
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-form-item
                    label="新密码"
                    :label-width="formLabelWidth"
                >
                    <el-input
                        v-model="form.newPassword"
                        show-password
                        autocomplete="off"
                    ></el-input>
                </el-form-item>
                <el-button
                    type="primary"
                    plain
                    style="margin: 0 auto; width: 100%;"
                    @click="changePassword"
                >修改密码</el-button>

            </el-form>

        </el-dialog>
    </div>
</template>

<script>
import { lgoinRequest, registerRequest, getUserInfoRequest, changePasswordRequest } from '@/api/user.js'
export default {
    data() {
        return {
            overlaylong: 'overlaylong',
            overlaytitle: 'overlaytitle',
            disfiex: 0,
            loginPhone: '',
            loginPassword: '',
            regestrPhone: '',
            regestrPassword: '',
            regestrPassword_2: '',
            dialogTableVisible: false,
            form: {
                name: '',
                oldPassword: '',
                newPassword: ''
            },
            formLabelWidth: '120px'
        }
    },
    mounted() {
        console.log('Login mounted')

    },
    methods: {
        async changePassword() {
            const res = await changePasswordRequest(this.form)
            if (res.code === 200) {
                this.$message.success('修改成功')
                this.dialogTableVisible = false
            } else {
                this.$message.error('修改失败')
            }
        },
        Signin() {
            this.overlaylong = "overlaylongleft"
            this.overlaytitle = "overlaytitleright"
            setTimeout(() => {
                this.disfiex = 1
            }, 200)
        },
        Signup() {
            this.overlaylong = "overlaylongright"
            this.overlaytitle = "overlaytitleleft"

            setTimeout(() => {
                this.disfiex = 0
            }, 200)

        },
        rules(type) {

            if (type === 'login') {
                // 正则验证手机号
                const reg = /^1[3-9]\d{9}$/
                if (!reg.test(this.loginPhone)) {
                    this.$message.error('请输入正确的手机号')
                    return false
                }
                if (this.loginPhone === '') {
                    this.$message.error('请输入手机号')
                    return false
                } else if (this.loginPassword === '') {
                    this.$message.error('请输入密码')
                    return false
                }

            } else if (type === 'regestr') {

                const reg = /^1[3-9]\d{9}$/
                if (!reg.test(this.regestrPhone)) {
                    this.$message.error('请输入正确的手机号')
                    return false
                }
                if (this.regestrPhone === '') {
                    this.$message.error('请输入手机号')
                    return false

                } else if (this.regestrPassword === '') {
                    this.$message.error('请输入密码')
                    return false
                } else if (this.regestrPassword_2 === '') {
                    this.$message.error('请再次输入密码')
                    return false
                } else if (this.regestrPassword !== this.regestrPassword_2) {
                    this.$message.error('两次密码不一致')
                    return false
                }
            }

            return true

        },
        async login() {
            const isOk = this.rules('login')
            if (!isOk) return

            const data = {
                phone: this.loginPhone,
                password: this.loginPassword
            }
            const res = await lgoinRequest(data)
            if (res.code === 200) {
                this.$message.success('登录成功')
                localStorage.setItem("token", JSON.stringify(res.data.token));
                const userInfo = await getUserInfoRequest()
                localStorage.setItem("avatar", userInfo.data.user.avatar);
                localStorage.setItem("user-info", JSON.stringify(userInfo.data.user));
                this.$router.push('/user')
            }


        },
        async regestr() {
            console.log(111111111111);
            const isOk = this.rules('regestr')
            if (!isOk) return

            const data = {
                phone: this.regestrPhone,
                password: this.regestrPassword
            }
            const res = await registerRequest(data)
            if (res.code === 200) {

                this.$message.success('注册成功')
                this.disfiex = 0
            }




        },

    }
}
</script>

<style>
.center {
    width: 100%;
    height: 100vh;
    /* 背景图片 */
    background-image: url('https://gd-hbimg.huaban.com/9165dc3c0f8279ae5402d1f47212847bff68b49f3cb547-QEli8R');

    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

h1 {
    font-size: 30px;
    color: black;
}

.logon {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    /* position: relative;
		overflow: hidden; */
    width: 768px;
    max-width: 100%;
    min-height: 480px;
    margin-top: 20px;
    display: flex;
    background: -webkit-linear-gradient(right, #4284db, #29eac4);
}

.overlaylong {
    border-radius: 10px 0 0 10px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlaylongleft {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    transform: translateX(100%);
    transition: transform 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlaylongright {
    border-radius: 10px 0 0 10px;
    width: 50%;
    height: 100%;
    background-color: #fff;
    transform: translateX(0%);
    transition: transform 0.6s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlaytitle {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
}


.overlaytitleH2 {
    font-size: 30px;
    color: #fff;
    margin-top: 20px;
}

.overlaytitleP {
    font-size: 15px;
    color: #fff;
    margin-top: 20px;
}

.overlaytitleleft {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(0%);
    transition: transform 0.6s ease-in-out;
}

.overlaytitleright {
    border-radius: 0px 10px 10px 0px;
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform 0.6s ease-in-out;
}

.overlaytitle-Signin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.overlaytitle-Signup {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.buttongohs {
    width: 180px;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #fff;
    color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    margin-top: 40px;
}

.overlaylongH2 {
    font-size: 25px;
    color: black;
    /* width: 250px; */
}

.overlaylong-Signin {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.overlaylong-Signup {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 10px 0;
    width: 240px;
}

h3 {
    font-size: 10px;
    margin-top: 10px;
    cursor: pointer;
}

.inupbutton {
    background-color: #29eac4;
    border: none;
    width: 180px;
    height: 40px;
    border-radius: 50px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    margin-top: 30px;
}
</style>