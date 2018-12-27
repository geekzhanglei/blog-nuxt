<template>
    <div>
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
        >
            <el-menu-item index="login">
                <nuxt-link tag="a" :to="{name:'login'}">管理后台</nuxt-link>
            </el-menu-item>
            <el-menu-item index="me">
                <nuxt-link tag="a" :to="{name:'about'}" class="h_msg ani-menulist" exact>关于博客</nuxt-link>
            </el-menu-item>
            <el-menu-item index="word">
                <nuxt-link tag="a" :to="{name:'msg'}" class="h_msg ani-menulist" exact>微言大义</nuxt-link>
            </el-menu-item>
            <el-menu-item index="message">
                <nuxt-link tag="a" :to="{name: 'index'}" class="h_article ani-menulist">连篇累牍</nuxt-link>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.el-menu-item {
    float: right;
}
.el-menu-item:first-child {
    float: left;
}
.el-menu-item a {
    display: flex;
    justify-content: center;
}
@media screen and (max-width: 900px) {
    .el-menu-item:first-child {
        display: none;
        float: none;
    }
    .el-menu {
        display: flex;
        justify-content: space-around;
    }
    .el-menu-item {
        flex: 1;
        display: flex;
        justify-content: center;
    }
    .el-menu-item a {
        display: block;
        width: 100%;
        text-align: center;
    }
}
</style>


