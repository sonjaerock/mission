import Vue from 'vue';
import Vuex from 'vuex';

import Problem from './modules/problem';
import Result from './modules/result';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Problem,
    Result
  }
})
