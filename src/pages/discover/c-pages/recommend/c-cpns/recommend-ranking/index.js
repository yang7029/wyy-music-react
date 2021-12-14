import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import HYThemeHeaderRCM from '@/components/theme-header-rcm'

import { RankingWrapper } from './style.js'
import HYTopRanking from '@/components/top-ranking'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function HYRecommedRanking() {
  const { upRanking, newRanking, originRanking } = useSelector((state) => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking']),
  }))

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" />
      <div className="tops">
        <HYTopRanking info={upRanking} />
        <HYTopRanking info={newRanking} />
        <HYTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
