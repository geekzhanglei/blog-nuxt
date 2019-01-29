<template>
    <div>
        <ErrorPage :InternalErr="error"></ErrorPage>
    </div>
</template>

<script>
import ErrorPage from "./components/NotFoundComponent";
export default {
    props: ["error"],
    layout: "admin", // 你可以为错误页面指定自定义的布局
    components: {
        ErrorPage
    }
};
</script>
