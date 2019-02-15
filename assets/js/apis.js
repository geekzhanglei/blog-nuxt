/*
 * @Author: zhanglei
 * @Date: 2019-02-15 16:41:10
 * @Last Modified by: zhanglei
 * @Last Modified time: 2019-02-15 16:41:30
 */

/* api 列表 */
let Prefix = process.env.NODE_ENV === 'production' ? 'https://blogapi.feroad.com' : '/api';
let ImgPrefix = process.env.NODE_ENV === 'production' ? 'https://api.feroad.com' : '/imgapi';

export const getArticleList = `${Prefix}/article/getArticleList`; // 获取首页文章列表
export const getMsgList = `${Prefix}/page`; // 获取动态页列表
export const addMsg = `${Prefix}/add`; // 添加新动态
export const addReplyMsg = `${Prefix}/reply/add`; // 动态下添加评论
export const msgSupport = `${Prefix}/agree/`; // 动态点赞功能
export const getArticle = `${Prefix}/article/newGetArticleDetails/`; // 获取特定文章
export const addMark = `${Prefix}/article/addMark`; // 文章增加评论功能
export const addSupport = `${Prefix}/article/agreeForArticleMarks/` // 文章评论点赞和取消点赞功能
export const adminLogin = `${Prefix}/admin/login`; // 登录接口
export const isLogin = `${Prefix}/admin/isLogin`; // 判断是否登录态
export const getAdminInfo = `${Prefix}/admin/getAdministerInfo`; // 获取个人信息
export const loginOut = `${Prefix}/admin/loginout`; // 登录注销
export const modifyPsw = `${Prefix}/admin/modifyPassword`; // 修改密码
export const modifyAdministerInfo = `${Prefix}/admin/modityAdministerInfo`; // 上传头像图片
export const releaseArt = `${Prefix}/article/add`; // 发布文章
export const markdownImgUpload = `${ImgPrefix}/upload`; // markdown内图片逐一上传
export const getArticleIntroList = `${Prefix}/admin/getArticleIntroList`;
// 获取带摘要的文章列表
export const deleteArticle = `${Prefix}/article/deleteArticleById/`; // 删除文章
export const getArticleListWithMark = `${Prefix}/article/getArticleListWithMark`; // 获取带评论的文章
export const deleteComms = `${Prefix}/article/deleteMark/`; // 删除评论
export const setDefaultArticlePages = `${Prefix}/admin/setDefaultArticlePages`; // 设置默认文章页数
export const setDefaultCommentInfos = `${Prefix}/admin/setDefaultCommentInfos`; // 修改留言板单页条数与默认留言昵称、默认回复昵称接口
export const getAdminMsgList = `${Prefix}/pageForAdmin`; // 后台留言列表获取
export const deleteMsg = `${Prefix}/delete/`; // 删除留言
