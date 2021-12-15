import React, { memo, useCallback, useEffect, useRef, useState } from 'react'

import { Slider } from 'antd'
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style.js'

import { getSizeImage, formatDate, getPlaySong } from '@/utils/format-utils'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongDatailAction } from '../store/actionCreators'

export default memo(function HYAppPlayerBar() {
  // props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlaying, setPlaying] = useState(false)

  // redux hooks
  const dispatch = useDispatch()
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(['player', 'currentSong']),
    }),
    shallowEqual
  )

  // other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDatailAction(167876))
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
  }, [currentSong])

  // other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || ''
  const duration = currentSong.dt || 0
  const showDuration = formatDate(currentSong.dt || 0, 'mm:ss')
  const showCurrentTime = formatDate(currentTime, 'mm:ss')

  // handle function
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setPlaying(!isPlaying)
  }

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime
    if (!isChange) {
      setCurrentTime(currentTime * 1000)
      setProgress(((currentTime * 1000) / duration) * 100)
    }
  }

  const sliderChange = useCallback(
    (value) => {
      // 开始
      setIsChange(true)
      const currentTime = (value / 100) * duration
      setCurrentTime(currentTime)
      setProgress(value)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    (value) => {
      // 更新时间
      const currentTime = ((value / 100) * duration) / 1000
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      // 关闭
      setIsChange(false)

      if (!isPlaying) {
        playMusic()
      }
    },
    [duration, isPlaying, playMusic]
  )
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button
            className="sprite_player play"
            onClick={(e) => playMusic()}
          ></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="#/">
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator></Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} />
    </PlaybarWrapper>
  )
})
