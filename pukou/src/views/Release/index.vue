<template>
  <div class="publish-page">
    <el-alert
      title="成功提示的文案"
      type="success"
      show-icon
      style="width: 50% ;height: 80px; background-color: rebeccapurple; position:absolute; top: 100%; left: 50%; transform:translate(-40%,-40%); z-index: 99;"
      v-if="isok"
    >
    </el-alert>
    <div class="form">
      <label for="title">标题</label>
      <input
        type="text"
        id="title"
        v-model="title"
        style="width: 98%;"
      />

      <label for="cover">封面图片</label>
      <input
        type="file"
        id="cover"
        accept="image/*"
        multiple="multiple"
        @change="handleCoverUpload"
      />
      <img
        :src="cover"
        alt=""
        srcset=""
        style="width: 150px;height: 150px; object-fit: cover;margin-bottom: 10px;"
        v-if="cover"
      >

      <label for="content">内容</label>
      <div class="md">
        <v-md-editor
          v-model="value"
          height="400px"
          :disabled-menus="[]"
          @upload-image="handleUploadImage"
        ></v-md-editor>
      </div>


      <button @click="publishArticle">发布</button>
    </div>

  </div>
</template>

<script>

import { addArticle } from '@/api/community'
import { uploadImage } from '@/api/user'
export default {
  components: {
    // VueMarkdownEditor
  },
  data() {
    return {
      title: '',
      cover: null,
      md: '',
      options: [],
      value: '',
      isok: false,
      imgMenus: []
    };
  },
  async mounted() {



  },
  methods: {
    handleCoverUpload(event) {
      this.cover = ""
      const file = event.target.files[0];
      uploadImage(file).then(res => {
        if (res.code == 200) {
          console.log(res);
          this.cover = res.msg
        }
      })



    },
    handleUploadImage(event, insertImage, files) {
      // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
      uploadImage(files[0]).then(res => {
        if (res.code == 200) {
          // this.imgMenus.push(res.msg)
          insertImage({
            url: res.msg,
            desc: '图片',
            width: '300',
            height: '200',
          });
        }
      })
    },

    publishArticle() {
      const user = localStorage.getItem('user-info');

      const userInfo = JSON.parse(user);
      console.log(userInfo.avatar);
      addArticle({
        content: this.value,
        articleImg: this.cover,
        title: this.title,
        authorImg: userInfo.avatar
        // authorImg: '',
      }).then(res => {
        if (res.code == 200) {
          this.isok = true
          setTimeout(() => {
            this.$router.push({ path: '/community' });
          }, 1000);
        }
      })
    }


  }
};
</script>

<style>
.publish-page {
  width: 100%;
  background: rgba(233, 219, 26, 0.404);
  /* background: white; */
  min-height: 98vh;
  margin: 0 auto;
  padding: 20px;
  color: #fff;
}

.publish-page h1 {
  text-align: center;
}

.form {
  margin-top: 20px;
  width: 90%;
  margin: 0 auto;
  z-index: 1;
}

.form label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
}

.form input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background: white;
}

.form button {
  width: 80%;
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}

.md {
  color: black;
}

.form button:hover {
  background-color: #0056b3;
}

.vue-mde-editor {
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
