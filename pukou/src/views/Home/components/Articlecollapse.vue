<template>
    <div class="article-collapse-container">
        <el-collapse accordion>
            <el-collapse-item
                v-for="(item, index) in list"
                :key="index"
            >
                <template slot="title">
                    <div class="title">
                        <i class="header-icon el-icon-info"></i> <span>{{ item.title }}</span>
                    </div>
                </template>
                <div class="container">
                    
                    <v-md-editor
                        :value="item.content"
                        mode="preview"
                    ></v-md-editor>
                </div>

            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            activeNames: ['1']
        };
    },
    methods: {
        handleChange(val) {
            console.log(val);
        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.article-collapse-container {
    width: 80%;
    margin: 0 auto;

    .title {
        margin-left: 10px;
        display: flex;
        align-items: center;

        span {
            font-size: 20px;
            margin-left: 10px;
            font-weight: bolder;
            color: #fad119;
        }
    }

    .container {
        padding: 20px;
        font-size: 16px;

        .image {
            width: 300px;
            height: 200px;
            margin-bottom: 10px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>