import Vue from 'vue';
import Vuex from 'vuex';
import levels from '@/store/levels'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    levels
  }
});
