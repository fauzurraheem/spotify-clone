import React, { useContext, useEffect, useState } from 'react'
import SongContext from '../context/songContext'
import useSpotify from './useSpotify'

function useSongInfo() {
  const spotifyApi = useSpotify()
  const {setCurrentTrackId,currentTrackId} = useContext(SongContext)
  const [songInfo, setSongInfo] = useState()

  useEffect(() => {
    const fetchSongInfo = async() => {
      if(currentTrackId){
        const trackInfo = await fetch(`https://api.spotify.com/v1/tracks/${currentTrackId}`,
        {
          headers:{
            Authorization:`Bearer ${spotifyApi.getAccessToken()}`,
          }
        }).then(res => res.json());

        setSongInfo(trackInfo)
      }
    }

    fetchSongInfo()
  }, [currentTrackId, spotifyApi])




  return songInfo
}

export default useSongInfo