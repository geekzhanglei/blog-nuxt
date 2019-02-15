<template>
    <div>
        <div class="list">
            <div class="container">
                <div v-for="(item,index) in items" :key="index">
                    <div class="col-md-12">
                        <div class="articlelist">
                            <h4>
                                <nuxt-link
                                    :to="{name:'article-id',params:{id:item.id}}"
                                    class="article-l"
                                >{{item.title}}</nuxt-link>
                            </h4>
                            <div class="intro" v-html="item.introduction"></div>
                            <p class="time">{{transferTime(item.createTime)}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <el-pagination
                v-if="showPages"
                class="blog-page"
                background
                @current-change="handleCurrentChange"
                :current-page="curPage"
                :page-size="perPage"
                layout="total, prev, pager, next, jumper"
                :total="total"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import { getArticleList } from "@/assets/js/apis";
import formatTime from "@/assets/js/utils";

export default {
    async asyncData({ app }) {
        let data = await app.$axios
            .$get(`${getArticleList}?curpage=1`)
            .then(res => res.result);
        if (data.isPagination) {
            return {
                showPages: true,
                items: data.data,
                curPage: 1,
                perPage: Number(data.perpage),
                total: data.rows
            };
        } else {
            return { showPages: false, items: data.data };
        }
    },
    methods: {
        // 请求文章数据接口
        reqArticleDataApi: function(e) {
            this.$axios
                .$get(getArticleList, { params: { curpage: e } })
                .then(res => {
                    if (res.result && res.result.status) {
                        this.items = res.result.data;
                        if (res.result.isPagination) {
                            this.showPages = true;
                            this.curPage = e;
                            this.perPage = Number(res.result.perpage);
                            this.total = res.result.rows;
                        } else {
                            this.showPages = false;
                        }
                    } else {
                        this.showPages = false;
                    }
                });
        },
        // 时间戳转换
        transferTime: function(unixTime) {
            return formatTime(unixTime * 1000, "yyyy年MM月dd日 hh:mm:ss");
        },
        // 分页方法
        handleCurrentChange(val) {
            this.reqArticleDataApi(val);
        }
    }
};
</script>

<style scoped>
/*文章列表与文章详情*/

.articlelist,
.article {
    background: #f8f8f8;
    margin-bottom: 20px;
    border-left: 8px #ccc solid;
    box-shadow: 0 1px 4px #aaa;
}

/*文章列表*/
.articlelist img {
    max-width: 100%;
}
.articlelist h4 {
    padding: 10px 10px 0 20px;
    color: #2ca6cb;
    font-size: 24px;
    font-weight: 300;
}

.articlelist h4 a {
    text-decoration: none;
}

.articlelist h4 a:hover {
    color: #f4645f;
    text-shadow: 0px 0px 10px #f4645f;
}

.articlelist p {
    margin-bottom: 0;
    padding: 5px 20px 0px 20px;
    color: #817c7c;
    line-height: 1.6;
    word-wrap: break-word;
    font-size: 16px;
}
.intro {
    color: #817c7c;
    padding: 5px 20px 0px 20px;
}
.articlelist p.time {
    margin-right: 50px;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
}
.blog-page {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
}
</style>
