import React, { useContext, useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { playlistState } from '../atoms/playlistatom'
import Song from './Song'
import useSpotify from '../hooks/useSpotify'
import SongContext from '../context/songContext'

const Songs = () => {
  
  // const playlist = useRecoilValue(playlistState)
  const {playlistId, setPlaylist , playlist} = useContext(SongContext)

  


  return (
    <div className='px-8 flex flex-col space-y-1 pb-28 text-white'>
      {playlist?.tracks.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i}/>
      ))}
    </div>
  )
}

export default Songs