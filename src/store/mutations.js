import * as types from './mutation-types'

const mutations = {
  // [方法名](参数1,参数2...){方法}
  [types.SET_OPEN_ID] (state, openId) {
    state.openId = openId
  }
}

export default mutations
