<template>
    <div
        class="my-release-container"
        style="background-color: #f5f5f5; width: 100%; height: 100%; margin: 0 auto;"
    >
        <div
            v-for="(item, index) in list"
            :key="index"
        >
            <BlogCard :item="item"></BlogCard>

        </div>
        <!-- <div style="height: 200px;width: 100%;  "></div>    -->
    </div>
</template>

<script>
import BlogCard from '@/components/Card/BlogCard.vue'
export default {
    components: {
        BlogCard
    },
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
}
</script>

<style></style>