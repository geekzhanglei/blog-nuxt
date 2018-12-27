<template>
    <div id="app">
        <Header></Header>
        <nuxt/>
        <Footer></Footer>
        <Canvas></Canvas>
    </div>
</template>
<script>
import Header from "./components/header";
import Footer from "./components/footer";
import Canvas from "../components/common/canvas";

export default {
    components: {
        Header,
        Footer,
        Canvas
    },
    mounted() {
        console.log(
            "这渣代码是我写的\r\n 你居然还要扒开了看\r\n我表示略尴尬\r\n 非要看源码的话：\r\n\r\n\r\n%cfollow me %c https://github.com/geekzhanglei/blog",
            "color:red",
            "color:green"
        );
        document.addEventListener("visibilitychange", function() {
            if (document.visibilityState == "hidden") {
                document.title = "这里有bug，快看！";
            } else {
                document.title = "欢迎回到博客";
            }
        });
    }
};
</script>


