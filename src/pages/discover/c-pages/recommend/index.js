import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function HYRecommend(props) {
  // 组件和 redux 关联
  const dispatch = useDispatch()
  const { topBanners } = useSelector((state) => {
    return {
      topBanners: state.recommend.topBanners,
    }
  }, shallowEqual)

  // 发起网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      HYRecommend
      <h2>{topBanners.length}</h2>
    </div>
  )
}

export default memo(HYRecommend)

// function HYRecommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       HYRecommend
//       <h2> {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = (state) => {
//   return {
//     topBanners: state.recommend.topBanners,
//   }
// }

// const mapDispatchTopProps = (dispatch) => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction())
//     },
//   }
// }

// export default connect(mapStateToProps, mapDispatchTopProps)(memo(HYRecommend))
