<template>
    <div class="footer">
        <!-- <div class="footer" v-bind:class="{fixedfooter:isActive}">, -->
        <p>京ICP备16014645号-1</p>
        <!-- </div> -->
    </div>
</template>
<script>
export default {};
</script>
<style>
.footer {
    position: absolute;
    bottom: 0;
    border-top: 3px #fecf4b solid;
    width: 100%;
    text-align: center;
}
.footer p {
    color: #aaa;
    background: #545c64;
    border-top: 1px #545c64 solid;
    padding: 15px 0;
    margin: 0;
    font-weight: normal;
}
@media screen and (max-width: 900px) {
    .footer {
        display: none;
    }
}
</style>



