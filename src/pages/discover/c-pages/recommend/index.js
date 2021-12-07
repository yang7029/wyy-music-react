import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function HYRecommend(props) {
  const { getBanners, topBanners } = props

  useEffect(() => {
    getBanners()
  }, [getBanners])

  return (
    <div>
      HYRecommend
      <h2> {topBanners.length}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    topBanners: state.recommend.topBanners,
  }
}

const mapDispatchTopProps = (dispatch) => {
  return {
    getBanners: () => {
      dispatch(getTopBannerAction())
    },
  }
}

export default connect(mapStateToProps, mapDispatchTopProps)(memo(HYRecommend))
