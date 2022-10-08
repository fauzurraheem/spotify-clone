import { useSession } from 'next-auth/react'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import SongContext from '../context/songContext'
import useSongInfo from '../hooks/useSongInfo'
import useSpotify from '../hooks/useSpotify'
import {HiSwitchHorizontal} from 'react-icons/hi'
import {TiMediaRewind} from 'react-icons/ti'
import {AiFillPauseCircle} from 'react-icons/ai'
import {AiFillPlayCircle} from 'react-icons/ai'
import {TiMediaFastForward} from 'react-icons/ti'
import {HiReply} from 'react-icons/hi'
import {FaVolumeUp} from 'react-icons/fa'
import {FaVolumeDown} from 'react-icons/fa'
import { debounce } from 'lodash'









const Player = () => {
  const spotifyApi = useSpotify()
  const {data:session, status} = useSession()
  const {setCurrentTrackId,setIsPlaying,isPlaying,currentTrackId} = useContext(SongContext)
  const [volume, setVolume] = useState(50)

  const songInfo = useSongInfo()

  const fetchCurrentSong = () => {
    if(!songInfo){
      spotifyApi.getMyRecentlyPlayedTracks({
        limit : 1
      }).then(data => {
        setCurrentTrackId(data.body.items[0].track.id);
 

        spotifyApi.getMyCurrentPlaybackState().then(data => {
          setIsPlaying(data.body?.is_playing)
        });

       
      });

    }
  }

  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then(data => {
      console.log(data)
      if(data.body.is_playing){
        spotifyApi.pause();
        setIsPlaying(false)
        console.log(data.body.is_playing)
      }else{
        spotifyApi.play();
        setIsPlaying(true)
      }
    })
  }

  useEffect(() => {
    if(spotifyApi.getAccessToken() && !currentTrackId){
      fetchCurrentSong()
      setVolume(50)
    }
  }, [currentTrackId,spotifyApi,session])


  useEffect(() => {
    if(volume > 0 && volume < 100){
      debounceAdjustVolume(volume)
    }
  },[volume])

  const debounceAdjustVolume = useCallback(
    debounce(volume => {
      spotifyApi.setVolume(volume).catch(err => {});
    },500)
  )



  return (
    <div className='h-24 bg-gradient-to-b from from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-bse px-2 md:px-8'>
      <div className='flex items-center space-x-4'>
        <img className='hidden md:inline h-10 w-10 bg-black border-0 p-0' src={songInfo?.album.images?.[0]?.url} alt="" />
        <div>
          <h3>{songInfo?.name}</h3>
          <p>{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>


      <div className='flex items-center justify-evenly'>
        <HiSwitchHorizontal className='button' />
        <TiMediaRewind className='button' onClick={() => spotifyApi.skipToPrevious()} />

        {!isPlaying ? (<AiFillPlayCircle onClick={handlePlayPause} className='button w-10 h-10'/>):(<AiFillPauseCircle onClick={handlePlayPause} className='button w-10 h-10' />)}

        <TiMediaFastForward  
        onClick={() => spotifyApi.skipToNext()}
        className='button'/>

        <HiReply className='button' />

      </div>

      <div className='flex items-center space-x-3 md:space-x-4 justify-end pr-5'>
        <FaVolumeDown className='button' onClick={() => volume > 0 && setVolume(volume -10)} />
        <input className='w-14 md:w-28' value={volume} onChange={(e) => setVolume(Number(e.target.value))} type="range" name="" id="" min={0} max={100}  />
        <FaVolumeUp onClick={() => volume < 100 && setVolume(volume + 10)} className='button' />
      </div>
      
    </div>
  )
}

export default Player