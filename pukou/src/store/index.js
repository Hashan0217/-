import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  /* vuex数据持久化配置 */
  plugins: [
    createPersistedState({
      // 存储方式：localStorage、sessionStorage、cookies
      storage: window.sessionStorage,
      // 存储的 key 的key值
      key: "store",
      render(state) {
        // 要存储的数据：本项目采用es6扩展运算符的方式存储了state中所有的数据
        return { ...state };
      }
    })
  ],
  state: {
    pageTitle: '扑挂网站',
    shopList: [],
    userInfoBackup: {},
    puguaDateile: {},
    bugua: []
  },
  getters: {
    pageTitle: state => state.pageTitle,
    shopList: state => state.shopList,
    userInfoBackup: state => state.userInfoBackup,
    liuShen: state => state.puguaDateile.liuShen,
    feiFushen: state => state.puguaDateile.feifuShen,
    feiFuShenDayJian: state => state.puguaDateile.num.feifuShenDayJian,
    feiFuShenYueJian: state => state.puguaDateile.num.feifuShenYueJian,
    benGuaLiuQin: state => state.puguaDateile.benGuaLiuQin,
    benGuaHunTianJiaZi: state => state.puguaDateile.benGuaHunTianJiaZi,
    benGuaYueJian: state => state.puguaDateile.num.benGuaYueJian,
    benGuaDayJian: state => state.puguaDateile.num.benGuaDayJian,
    bugua: state => state.bugua,
    benGuaShiYaoYingYao: state => state.puguaDateile.benGuaShiYaoYingYao,
    bianGuaLiuQin: state => state.puguaDateile.bianGuaLiuQin,
    bianGuaYueJian: state => state.puguaDateile.num.bianGuaYueJian,
    bianGuaDayJian: state => state.puguaDateile.num.bianGuaDayJian,
    bianGuaHunTianJiaZi: state => state.puguaDateile.bianGuaHunTianJiaZi,
    biangua: (state) => {
      const biangua = []
      state.bugua.map((item, index) => {
        if (item === '3') {
          biangua[index] = '4'
          return

        }
        if (item === '4') {
          biangua[index] = '3'
          return
        } else {
          biangua[index] = item
        }
      })

      return biangua
    },
    bianGuaShiYaoYingYao: state => state.puguaDateile.bianGuaShiYaoYingYao,
    benGuaName: state => state.puguaDateile.benGuaName,
    benGuaPalace: state => state.puguaDateile.benGuaPalace,
    benGuaWuxing: state => state.puguaDateile.benGuaWuxing,
    bianGuaName: state => state.puguaDateile.bianGuaName,
    bianGuaPalace: state => state.puguaDateile.bianGuaPalace,
    bianGuaWuxing: state => state.puguaDateile.bianGuaWuxing,
    meansText: state => state.puguaDateile.meansText,
    feifuShen: state => state.puguaDateile.feifuShen,
    linYueJianYuePo: state => state.puguaDateile.linYueJianYuePo,
    linRiJianAnDongRiPo: state => state.puguaDateile.linRiJianAnDongRiPo,
    xunKong: state => state.puguaDateile.xunKong,
    yueJian: state => state.puguaDateile.yueJian,
    dayJian: state => state.puguaDateile.dayJian,
  },
  mutations: {
    upPageTitle(state, title) {
      state.pageTitle = title
    },
    upShopList(state, list) {

      state.shopList = list

    },
    upUserInfoBackup(state, userInfo) {
      state.userInfoBackup = userInfo
    },
    upPuguaDateile(state, puguaDateile) {
      state.puguaDateile = puguaDateile
    },
    upBuGua(state, bugua) {
      state.bugua = bugua
    }
  },
  actions: {

  },
  modules: {
  }
})
