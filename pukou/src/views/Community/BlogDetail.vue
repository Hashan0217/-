<template>
    <div class="blog-detail-container">
        <div class="top">
            <div class="authorInfo">
                <div class="authorInfo-left">
                    <img
                        :src="authorAvatar || 'https://via.placeholder.com/80'"
                        alt=""
                    >
                </div>
                <div class="authorInfo-right">
                    <div class="authorInfo-right-top">
                        <span class="name">作者：{{ authorName }}</span>
                        <span class="time">发布时间：{{ createTime }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style=" width: 100%; ">
            <h1 style="background-color: white; margin-left: 15px;">{{ title }}</h1>
            <v-md-editor
                :value="markdown"
                mode="preview"
            ></v-md-editor>
        </div>

        <div
            class="comment-area"
            style="width: 100%; padding-top: 30px;"
            v-if="id"
        >
            <CommentareaVue></CommentareaVue>
        </div>
        <div style="width: 100%;height: 100px;"></div>

    </div>
</template>

<script>
import { getCommunityDetail, addComment } from '@/api/community.js';
import CommentareaVue from './Commentarea.vue';
export default {
    components: {
        CommentareaVue
    },
    data() {
        return {
            markdown: '### 标题sdfsdfdsf',
            id: '',
            authorName: '',
            authorAvatar: '',
            createTime: '',
            title: ''

        };
    },
    mounted() {
        console.log(this.$route.query.id);
        this.id = this.$route.query.id;
        localStorage.setItem('blogId', this.id);
        this.getData();
    },
    methods: {
        getData() {
            console.log();
            getCommunityDetail(this.id).then(res => {
                console.log(res);
                if (res.code === 200) {
                    console.log(res);
                    this.markdown = res.data.content;
                    this.authorName = res.data.createBy;
                    this.authorAvatar = res.data.authorImg;
                    this.title = res.data.title;
                    this.createTime = res.data.createTime;
                    // this.list = res.rows;
                    // this.total = res.total;
                }
            })

        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.blog-detail-container {
    height: 100%;
    background: white;
    border-left: 1px solid #ebeef5;

    .top {
        background: white;
        /* display: flex;
        align-items: center; */
        margin-bottom: 30px;

        .authorInfo {
            display: flex;

            align-items: center;
            /* justify-content: space-between; */
            width: 100%;
            height: 100px;
            background: rgba(255, 208, 0, 0.658);
            border-radius: 0px 0px 10px 10px;

            .authorInfo-left {
                margin-top: 20px;
                margin-left: 50px;
                margin-bottom: 20px;

                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
            }

            .authorInfo-right {
                /* height: 100%; */
                margin-top: 20px;
                margin-left: 30px;
                margin-bottom: 20px;

                .authorInfo-right-top {
                    display: flex;
                    justify-content: space-around;
                    flex-direction: column;
                    align-items: flex-start;

                    .name {
                        font-size: 20px;
                        color: #000;
                        font-weight: bolder;
                        margin-bottom: 10px;
                    }

                    .time {
                        font-size: 16px;
                        color: #353333b4;
                    }
                }
            }
        }
    }

    .comment-area {
        z-index: 999;
        margin-top: 10px;
        width: 95%;
        background: white;
        margin: 0 auto;
    }

}
</style>