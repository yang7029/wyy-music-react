import React, { memo } from 'react'
import HYTopBanner from './c-cpns/top-banner'
import HYHotRecommend from './c-cpns/hot-recommend/index.js'
import HYRecommedRanking from './c-cpns/recommend-ranking/index'
import HYNewAlbum from './c-cpns/new-album/index'
import HYUserLogin from './c-cpns/user-login'
import HYSettleSinger from './c-cpns/settle-singer'
import HYHotAnchor from './c-cpns/hot-anchor'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight,
} from './style.js'

function HYRecommend() {
  return (
    <RecommendWrapper>
      <HYTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HYHotRecommend />
          <HYNewAlbum />
          <HYRecommedRanking />
        </RecommendLeft>
        <RecommendRight>
          <HYUserLogin />
          <HYSettleSinger />
          <HYHotAnchor />
        </RecommendRight>
      </Content>
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
