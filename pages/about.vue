<template>
    <div class="container">
        <a class="aboutBgImg" href="javascript:;">
            <img src="http://img.feroad.com/programmer.gif">
        </a>
        <div class="cont">
            <h2 id="intro">项目概述</h2>
            <p>这是一个为学习和实践前后端技术而搭建的博客</p>
            <p>当前前端技术栈：vue/cli@3.0+vue+element-ui+nuxt</p>
            <p>当前后端技术栈：php+mysql（逐渐学习并引入node(koa2)+mongodb）</p>
            <p>
                前端：geekzl
                <a href="https://github.com/geekzhanglei/blog">(前端spa源码)</a>
                <a href="https://github.com/geekzhanglei/blog-nuxt">(前端nuxt源码)</a>
            </p>
            <p>后端：大民哥</p>
            <p>联系方式:</p>
            <ul>
                <li>
                    qq:
                    <code>1103307205</code>
                </li>
                <li>
                    电子邮箱:
                    <code>1103307205@qq.com</code>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.aboutBgImg {
    display: block;
    background: transparent;
    border: 1px solid #d0c2c2;
    width: 60%;
    margin: 0 auto;
}

.aboutBgImg:hover {
    border: 1px solid #8990d8;
}

.aboutBgImg img {
    width: 60%;
    height: 225px;
    display: block;
    margin: 0.5em auto;
}
.cont {
    margin: 0 auto;
    width: 80%;
}
@media screen and (max-width: 600px) {
    .container {
        width: 90%;
    }
    .aboutBgImg {
        width: 100%;
    }
    .aboutBgImg img {
        width: 90%;
    }
    .cont {
        width: 90%;
    }
}
</style>
