import Vue from 'vue';
import Vuex from 'vuex';
import imgDefault from '@/assets/img/avatar.png';
import global from '@/assets/js/global';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    nickname: '管理员',
    headimg: imgDefault
  },
  getters: {},
  mutations: {
    setInfo(state, payload) {
      state.nickname = payload.nickname;
      state.headimg = `${global.apiDomain}${payload.headimg}`;
    },
    setNickname(state, payload) {
      state.nickname = payload;
    },
    setHeadimg(state, payload) {
      state.headimg = payload;
    }
  },
  actions: {}
});
export default store;
