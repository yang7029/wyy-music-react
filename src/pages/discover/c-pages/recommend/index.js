import React, { memo } from 'react'
import HYTopBanner from './c-cpns/top-banner'
import { RecommendWrapper } from './style.js'

function HYRecommend() {
  return (
    <RecommendWrapper>
      <HYTopBanner />
    </RecommendWrapper>
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
