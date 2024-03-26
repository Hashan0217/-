<template>
    <div>
        <el-dialog
            title="修改个人信息"
            :visible.sync="dialogVisible"
            width="60%"
            :before-close="handleClose"
        >
            <el-form
                :model="form"
                :rules="rules"
                ref="form"
                label-width="150px"
            >
                <div class="updateinfo">
                    <div class="left">
                        <el-form-item prop="avatar">
                            <el-upload
                                class="avatar-uploader"
                                action="http://localhost:5000/file/img"
                                :show-file-list="true"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload"
                                :http-request="uploadImage"
                                :headers="{ 'Content-Type': 'multipart/form-data', Authorization: this.token }"
                            >
                                <img
                                    v-if="imageUrl"
                                    :src="imageUrl"
                                    class="avatar"
                                >
                                <i
                                    v-else
                                    class="el-icon-plus avatar-uploader-icon"
                                ></i>
                            </el-upload>
                            <!-- <img :src="form.avatar" /> -->

                        </el-form-item>
                        <!-- <el-form-item
                            label="账号密码"
                            prop="password"
                        >
                            <el-input v-model="form.password"></el-input>
                        </el-form-item> -->
                        <el-form-item
                            label="昵称"
                            prop="nickname"
                        >
                            <el-input v-model="form.nickname"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="年龄"
                            prop="age"
                        >
                            <el-input v-model="form.age"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="性别"
                            prop="sex"
                        >
                            <el-radio
                                v-model="form.sex"
                                label="1"
                            >男</el-radio>
                            <el-radio
                                v-model="form.sex"
                                label="0"
                            >女</el-radio>
                            <!-- <el-switch
                                v-model="form.sex"
                                active-color="#13ce66"
                                inactive-color="#ff4949"
                                active-text="男"
                                inactive-text="女"
                                :active-value="0"
                                :inactive-value="1"
                            >
                            </el-switch> -->
                        </el-form-item>
                        <el-form-item
                            label="邮箱"
                            prop="email"
                        >
                            <el-input
                                v-model="form.email"
                                :disabled="form.email ? true : false"
                            ></el-input>
                        </el-form-item>

                    </div>
                    <div class="right">
                        <el-form-item
                            label="用户编号"
                            prop="id"
                        >
                            <el-input
                                v-model="form.id"
                                disabled
                            ></el-input>
                        </el-form-item>
                        <el-form-item
                            label="账号"
                            prop="account"
                        >
                            <el-input
                                v-model="form.account"
                                disabled
                            ></el-input>
                        </el-form-item>
                        <el-form-item
                            label="地区"
                            prop="area"
                        >
                            <el-input v-model="form.area"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="兴趣爱好"
                            prop="hobby"
                        >
                            <el-input v-model="form.hobby"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="职业"
                            prop="work"
                        >
                            <el-input v-model="form.work"></el-input>
                        </el-form-item>
                        <!-- <el-form-item
                            label="个性签名"
                            prop="design"
                        >
                            <el-input v-model="form.design"></el-input>
                        </el-form-item> -->
                        <el-form-item
                            label="手机号码"
                            prop="mobilePhoneNumber"
                        >
                            <el-input v-model="form.mobilePhoneNumber"></el-input>
                        </el-form-item>
                    </div>
                </div>
            </el-form>
            <span
                slot="footer"
                class="dialog-footer"
            >
                <el-button @click="handleClose">取 消</el-button>
                <el-button
                    type="primary"
                    @click="submit"
                >提 交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>

import { uploadImage, getUserInfoRequest, setUserInfoRequest } from '@/api/user.js'
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: "PersonalDia",
    data() {
        return {
            dialogVisible: false,
            imageUrl: '',
            token: '',
            form: {
                avatar: "",
                password: "",
                nickname: "",
                age: Number,
                email: "",
                mobilePhoneNumber: "",
                sex: Number,
                id: Number,
                account: "",
                area: "",
                hobby: "",
                work: "",
                design: "",

            },
            rules: {
                nickname: [
                    { required: true, message: "昵称不能为空", trigger: "blur" },
                ],
                password: [
                    { required: true, message: "账号密码不能为空", trigger: "blur" },
                ],
            },
        };
    },
    mounted() {
        // this.load();
        // this.open();
    },
    computed: {
        ...mapGetters(['userInfoBackup'])
    },
    methods: {
        ...mapMutations(['upUserInfoBackup']),
        open() {
            let token = localStorage.getItem('token')

            this.token = "Bearer " + JSON.parse(token)
            this.load();
            this.dialogVisible = true;
        },
        load() {
            const userInfoJSON = localStorage.getItem('user-info')
            const userInfo = JSON.parse(userInfoJSON)
            this.form.avatar = userInfo.avatar;
            this.form.nickname = userInfo.userName;
            this.form.age = userInfo.age;
            this.form.email = userInfo.email;
            this.form.mobilePhoneNumber = userInfo.phonenumber
            this.form.sex = userInfo.sex
            this.form.id = userInfo.userId
            this.form.account = userInfo.createBy
            this.form.work = userInfo.profession
            this.form.hobby = userInfo.hobby
            this.form.area = userInfo.address
            const data = JSON.parse(JSON.stringify(this.form))
            this.upUserInfoBackup(data)

        },
        async submit() {
            this.form.avatar = this.imageUrl ? this.imageUrl : '';
            const data = {}
            console.log(this.$store.state.userInfoBackup);
            // 检查 form 和 formBate 是否有修改
            let isChange = false
            for (let key in this.userInfoBackup) {
                console.log(key, this.form[key], this.userInfoBackup[key]);
                if (this.form[key] !== this.userInfoBackup[key]) {

                    isChange = true
                    break
                }
            }


            console.log(111111);
            if (!isChange) {
                this.$message({
                    message: '未修改',
                    type: 'warning'
                });
                return
            }
            // 有修改 则放到 data 中
            for (let key in this.form) {
                if (this.form[key] !== this.userInfoBackup[key]) {
                    data[key] = this.form[key]
                }
            }





            const res = await setUserInfoRequest(data)
            if (res.code === 200) {

                const userInfo = await getUserInfoRequest()
                localStorage.setItem("user-info", JSON.stringify(userInfo.data.user));
                this.load();
                this.dialogVisible = false;
                this.$emit('upData')
                this.$message({
                    message: '修改成功',
                    type: 'success'
                });
            }
        },
        handleClose() {
            this.dialogVisible = false;

        },
        uploadImage(parma) {
            // const formData = new FormData();
            // formData.append('file', parma.file);
            uploadImage(parma.file).then(res => {
                if (res.code === 200) {
                    this.$message({
                        message: '上传成功',
                        type: 'success'
                    });
                    this.handleAvatarSuccess(res.msg)
                }
            })
        },
        async handleAvatarSuccess(res) {
            this.imageUrl = res;

        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }

            return isJPG && isLt2M;
        }
    },
};
</script>

<style scoped>
.updateinfo {
    height: 350px;
    overflow: auto;
}

.left {
    /* width: 330px; */
    float: left;
}

.right {
    overflow: hidden;
}

.avatar-uploader .el-upload {
    border: 1px dashed #292727;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border: 1px dashed #292727;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
