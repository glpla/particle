/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/assets/store/state'
import actions from '@/assets/store/actions'
import mutations from '@/assets/store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
