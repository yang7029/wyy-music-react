import * as actionTypes from './constants'
import { Map } from 'immutable'

// immutable.js
const defaultState = Map({
  topBanners: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      // return { ...state, topBanners: action.topBanners }
      return state.set('topBanners', action.topBanners)
    default:
      return state
  }
}

export default reducer
