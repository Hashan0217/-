<template>
    <!-- <div class="main-layout-container"> -->
    <el-container>
        <el-header style="height: 100%;width: 100%;padding: 0;box-shadow: -3px 25px 24px -4px rgba(0,0,0,0.1);">
            <slot name="header"></slot>
        </el-header>


        <el-container>

            <el-aside
                white="150"
                style="height: 100vh;padding:0; background-color: rgb(255, 255, 255);"
            >
                <slot name="aside"></slot>
            </el-aside>
            <el-main style="width: 100%;height: 100vh;padding: 0;">
                <slot name="main"></slot>
            </el-main>
        </el-container>
    </el-container>

    <!-- </div> -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-layout-container {
    width: 100%;
    height: 100vh;
}
</style>