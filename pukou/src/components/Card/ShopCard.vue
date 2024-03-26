<template>
    <div class="shop-card-container">
        <div class="shop-card">
            <div class="shop-card-image">
                <img
                    :src="item.img || 'https://via.placeholder.com/150'"
                    alt="shop-image"
                >
            </div>
            <div class="shop-card-content">
                <div class="shop-card-content-left">
                    <div class="shop-card-title">
                        <h2>{{ item.name }}</h2>
                    </div>
                    <div class="shop-card-description">
                        <p>{{ item.updateTime }}</p>
                    </div>
                </div>
                <div class="shop-card-content-right">
                    <div class="shop-card-price">
                        <span>￥{{ item.totalPrice || item.unitPrice }}</span>
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
            default: () => { }
        }
    }
}
</script>

<style
    lang="scss"
    scoped
>
.shop-card-container {
    width: 250px;
    height: 260px;

    .shop-card {
        width: 100%;
        height: 100%;
        /* border: 1px solid #000; */
        border-radius: 10px;
        /* overflow: hidden; */
        background: white;

        .shop-card-image {
            width: 100%;
            height: 150px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .shop-card-content {
            width: 100%;
            height: 40%;
            padding: 10px;
            display: flex;
            /* align-items: center; */
            position: relative;

            .shop-card-content-left {
                .shop-card-title {
                    h2 {
                        font-size: 1.2rem;
                        font-weight: 600;
                    }
                }

                .shop-card-description {
                    p {
                        font-size: 0.8rem;
                    }
                }

            }

            .shop-card-content-right {
                position: absolute;
                bottom: 40px;
                right: 25px;

                .shop-card-price {
                    span {
                        /* font-size: 1rem; */
                        font-weight: 600;
                        color: #ecbd3c;
                    }
                }
            }

        }


    }
}
</style>