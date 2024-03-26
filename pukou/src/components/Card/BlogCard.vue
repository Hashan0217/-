<template>
    <div
        class="blog-card-container"
        @click="goToPage(item)"
    >
        <div class="blog-card">
            <div class="blog-card-image">
                <img
                    :src="item.articleImg"
                    alt="blog card image"
                >

            </div>
            <div class="blog-card-content">
                <h3 class="blog-card-title">{{ item.title }}</h3>
                <p class="blog-card-description">{{ item.description }}</p>
                <div class="blog-card-footer">
                    <div class="blog-card-author">
                        <img
                            :src="item.authorImg || 'https://via.placeholder.com/300x150'"
                            alt="author image"
                        >
                        <span>{{ item.createBy }}</span>
                    </div>
                    <div class="blog-card-date">
                        <span>{{ item.createTime }}</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            // required: true
        }
    },
    computed: {
        avatar() {
            return this.item.cover || 'https://via.placeholder.com/300x150';
        }
    },
    methods: {
        goToPage(item) {
            this.$router.push({
                path: '/blogDetail?id=' + item.id
            });
        }
    },
    
}
</script>

<style
    lang="scss"
    scoped
>
.blog-card-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;

    .blog-card {
        width: 100%;
        min-height: 200px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        gap: 10px;

        .blog-card-image {
            width: 300px;
            height: 150px;
            margin-left: 10px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 10px;

            }

        }

        .blog-card-content {
            padding: 20px;

            .blog-card-title {
                font-size: 20px;
                font-weight: 600;
                margin-bottom: 10px;
            }

            .blog-card-description {
                font-size: 16px;
                color: #666;
                margin-bottom: 10px;
            }

            .blog-card-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .blog-card-author {
                    display: flex;
                    align-items: center;

                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }

                .blog-card-date {
                    font-size: 14px;
                    color: #666;
                }
            }
        }



    }
}
</style>