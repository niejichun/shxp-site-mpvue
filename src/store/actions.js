import * as types from './mutation-types'

export const setOpenId = ({commit}, {openId}) => {
  commit(types.SET_OPEN_ID, openId)
}
